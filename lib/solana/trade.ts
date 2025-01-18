import { PublicKey, Transaction, ComputeBudgetProgram } from '@solana/web3.js';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { Helius } from 'helius-sdk';
import { SolanaAgentKit } from 'solana-agent-kit';

const helius = new Helius(process.env.HELIUS_API_KEY!);

export async function trade(
  agent: SolanaAgentKit,
  outputMint: PublicKey,
  inputAmount: number,
  inputMint: PublicKey = TOKEN_PROGRAM_ID,
  slippageBps: number = 50
): Promise<string> {
  try {
    const scaledAmount = Math.floor(inputAmount * Math.pow(10, 6));

    // Jupiter API request
    const quoteResponse = await (await fetch(
      `https://quote-api.jup.ag/v6/quote?inputMint=${inputMint.toString()}` +
      `&outputMint=${outputMint.toString()}` +
      `&amount=${scaledAmount}` +
      `&slippageBps=${slippageBps}` +
      `&onlyDirectRoutes=true` +
      `&maxAccounts=64` +
      `&asLegacyTransaction=true` +
      `${agent.config.JUPITER_FEE_BPS ? `&platformFeeBps=${agent.config.JUPITER_FEE_BPS}` : ""}`
    )).json();

    // Get serialized transaction
    let feeAccount;
    if (agent.config.JUPITER_FEE_BPS && agent.config.JUPITER_FEE_ADDRESS) {
      feeAccount = new PublicKey(agent.config.JUPITER_FEE_ADDRESS);
    }

    const swapRequestBody = {
      quoteResponse,
      userPublicKey: agent.wallet_address.toString(),
      wrapAndUnwrapSol: true,
      dynamicComputeUnitLimit: false,
      prioritizationFeeLamports: "auto",
      feeAccount: feeAccount ? feeAccount.toString() : null,
      asLegacyTransaction: true,
    };

    const { swapTransaction } = await (await fetch("https://quote-api.jup.ag/v6/swap", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(swapRequestBody),
    })).json();

    // Deserialize transaction
    const swapTransactionBuf = Buffer.from(swapTransaction, "base64");
    const transaction = Transaction.from(swapTransactionBuf);

    // Remove the instruction that sets the compute unit price/limit
    const filteredInstructions = transaction.instructions.filter((instruction) => {
      const programId = instruction.programId;
      return !programId.equals(ComputeBudgetProgram.programId);
    });

    // Sign and send transaction using Helius
    const signature = await helius.rpc.sendSmartTransaction(filteredInstructions, [agent.wallet]);

    return signature;
  } catch (error) {
    console.error("Error in trade function:", error);
    throw error;
  }
}

