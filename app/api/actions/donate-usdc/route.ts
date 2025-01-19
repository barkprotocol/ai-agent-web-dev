import {
    ActionPostResponse,
    createPostResponse,
    ActionGetResponse,
    ActionPostRequest,
    createActionHeaders,
  } from '@solana/actions';
  import {
    clusterApiUrl,
    Connection,
    PublicKey,
    Transaction,
  } from '@solana/web3.js';
  import { Token, TOKEN_PROGRAM_ID } from '@solana/spl-token';
  
  const headers = createActionHeaders();
  
  // USDC token mint address
  const USDC_MINT = new PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v');
  
  export const GET = async (req: Request) => {
    try {
      const requestUrl = new URL(req.url);
      const { toPubkey } = validatedQueryParams(requestUrl);
  
      const baseHref = new URL(
        `/api/actions/donate-usdc?to=${toPubkey.toBase58()}`,
        requestUrl.origin,
      ).toString();
  
      const payload: ActionGetResponse = {
        type: 'action',
        title: 'Donate USDC to BARK',
        icon: 'https://ucarecdn.com/31907163-7e33-4844-9515-d0a0cea6e2ef/donation_usdc.png',
        description:
          'Solana Ecosystem | Support BARK with a USDC donation.',
        label: 'Transfer',
        links: {
          actions: [
            {
              type: 'transaction',
              label: 'Send 1 USDC',
              href: `${baseHref}&amount=${'1'}`,
            },
            {
              type: 'transaction',
              label: 'Send 5 USDC',
              href: `${baseHref}&amount=${'5'}`,
            },
            {
              type: 'transaction',
              label: 'Send 10 USDC',
              href: `${baseHref}&amount=${'10'}`,
            },
            {
              type: 'transaction',
              label: 'Send USDC',
              href: `${baseHref}&amount={amount}`,
              parameters: [
                {
                  name: 'amount',
                  label: 'Enter the amount of USDC to send',
                  required: true,
                },
              ],
            },
          ],
        },
      };
  
      return Response.json(payload, {
        headers,
      });
    } catch (err) {
      console.log(err);
      let message = 'An unknown error occurred';
      if (typeof err == 'string') message = err;
      return new Response(message, {
        status: 400,
        headers,
      });
    }
  };
  
  export const OPTIONS = async (req: Request) => {
    return new Response(null, { headers });
  };
  
  export const POST = async (req: Request) => {
    try {
      const requestUrl = new URL(req.url);
      const { amount, toPubkey } = validatedQueryParams(requestUrl);
  
      const body: ActionPostRequest = await req.json();
  
      let account: PublicKey;
      try {
        account = new PublicKey(body.account);
      } catch (err) {
        return new Response('Invalid "account" provided', {
          status: 400,
          headers,
        });
      }
  
      const connection = new Connection(
        process.env.SOLANA_RPC! || clusterApiUrl('mainnet-beta'),
      );
  
      const usdcToken = new Token(connection, USDC_MINT, TOKEN_PROGRAM_ID, account);
      const fromTokenAccount = await usdcToken.getOrCreateAssociatedAccountInfo(account);
      const toTokenAccount = await usdcToken.getOrCreateAssociatedAccountInfo(toPubkey);
  
      const transferInstruction = Token.createTransferInstruction(
        TOKEN_PROGRAM_ID,
        fromTokenAccount.address,
        toTokenAccount.address,
        account,
        [],
        amount * 1e6 // USDC has 6 decimal places
      );
  
      const { blockhash, lastValidBlockHeight } =
        await connection.getLatestBlockhash();
  
      const transaction = new Transaction({
        feePayer: account,
        blockhash,
        lastValidBlockHeight,
      }).add(transferInstruction);
  
      const payload: ActionPostResponse = await createPostResponse({
        fields: {
          type: 'transaction',
          transaction,
          message: `Sent ${amount} USDC to BARK: ${toPubkey.toBase58()}`,
        },
      });
  
      return Response.json(payload, {
        headers,
      });
    } catch (err) {
      console.log(err);
      let message = 'An unknown error occurred';
      if (typeof err == 'string') message = err;
      return new Response(message, {
        status: 400,
        headers,
      });
    }
  };
  
  function validatedQueryParams(requestUrl: URL) {
    let toPubkey: PublicKey = new PublicKey(
      'FWXHZxDocgchBjADAxSuyPCVhh6fNLT7DUggabAsuz1y',
    );
    let amount: number = 1;
  
    try {
      if (requestUrl.searchParams.get('to')) {
        toPubkey = new PublicKey(requestUrl.searchParams.get('to')!);
      }
    } catch (err) {
      throw 'Invalid input query parameter: to';
    }
  
    try {
      if (requestUrl.searchParams.get('amount')) {
        amount = parseFloat(requestUrl.searchParams.get('amount')!);
      }
  
      if (amount <= 0) throw 'amount is too small';
    } catch (err) {
      throw 'Invalid input query parameter: amount';
    }
  
    return {
      amount,
      toPubkey,
    };
  }
  
  