import { Connection, type PublicKey, Transaction } from "@solana/web3.js"
import { Token, TOKEN_PROGRAM_ID, ASSOCIATED_TOKEN_PROGRAM_ID } from "@solana/spl-token"

// Initialize Solana connection
const connection = new Connection(process.env.NEXT_PUBLIC_SOLANA_RPC_URL!, "confirmed")

/**
 * Get or create an associated token account
 * @param mint The mint address of the token
 * @param owner The owner's public key
 * @returns The associated token account
 */
export async function getOrCreateAssociatedTokenAccount(mint: PublicKey, owner: PublicKey) {
  const associatedTokenAddress = await Token.getAssociatedTokenAddress(
    ASSOCIATED_TOKEN_PROGRAM_ID,
    TOKEN_PROGRAM_ID,
    mint,
    owner,
  )

  let tokenAccount
  try {
    tokenAccount = await Token.getAccountInfo(TOKEN_PROGRAM_ID, associatedTokenAddress, connection)
  } catch (error) {
    // If the account doesn't exist, create it
    const transaction = new Transaction().add(
      Token.createAssociatedTokenAccountInstruction(
        ASSOCIATED_TOKEN_PROGRAM_ID,
        TOKEN_PROGRAM_ID,
        mint,
        associatedTokenAddress,
        owner,
        owner,
      ),
    )

    const { blockhash } = await connection.getLatestBlockhash()
    transaction.recentBlockhash = blockhash
    transaction.feePayer = owner

    // Sign and send the transaction
    const signedTransaction = await window.solana.signTransaction(transaction)
    const signature = await connection.sendRawTransaction(signedTransaction.serialize())
    await connection.confirmTransaction(signature)

    tokenAccount = await Token.getAccountInfo(TOKEN_PROGRAM_ID, associatedTokenAddress, connection)
  }

  return tokenAccount
}

/**
 * Get token balance for a specific mint and owner
 * @param mint The mint address of the token
 * @param owner The owner's public key
 * @returns The token balance
 */
export async function getTokenBalance(mint: PublicKey, owner: PublicKey): Promise<number> {
  const tokenAccount = await getOrCreateAssociatedTokenAccount(mint, owner)
  const balance = await connection.getTokenAccountBalance(tokenAccount.address)
  return Number.parseFloat(balance.value.amount) / Math.pow(10, balance.value.decimals)
}

/**
 * Transfer tokens from one account to another
 * @param mint The mint address of the token
 * @param from The sender's public key
 * @param to The recipient's public key
 * @param amount The amount of tokens to transfer
 * @returns The transaction signature
 */
export async function transferTokens(mint: PublicKey, from: PublicKey, to: PublicKey, amount: number): Promise<string> {
  const fromTokenAccount = await getOrCreateAssociatedTokenAccount(mint, from)
  const toTokenAccount = await getOrCreateAssociatedTokenAccount(mint, to)

  const transaction = new Transaction().add(
    Token.createTransferInstruction(
      TOKEN_PROGRAM_ID,
      fromTokenAccount.address,
      toTokenAccount.address,
      from,
      [],
      amount * Math.pow(10, fromTokenAccount.decimals),
    ),
  )

  const { blockhash } = await connection.getLatestBlockhash()
  transaction.recentBlockhash = blockhash
  transaction.feePayer = from

  // Sign and send the transaction
  const signedTransaction = await window.solana.signTransaction(transaction)
  const signature = await connection.sendRawTransaction(signedTransaction.serialize())
  await connection.confirmTransaction(signature)

  return signature
}

/**
 * Get all token accounts for a wallet
 * @param owner The owner's public key
 * @returns An array of token accounts
 */
export async function getTokenAccounts(owner: PublicKey) {
  const tokenAccounts = await connection.getParsedTokenAccountsByOwner(owner, {
    programId: TOKEN_PROGRAM_ID,
  })

  return tokenAccounts.value.map((account) => ({
    mint: account.account.data.parsed.info.mint,
    tokenAmount: account.account.data.parsed.info.tokenAmount,
  }))
}

