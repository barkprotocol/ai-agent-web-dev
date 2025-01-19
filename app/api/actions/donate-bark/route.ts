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
  
  // BARK token mint address
  const BARK_MINT = new PublicKey('2NTvEssJ2i998V2cMGT4Fy3JhyFnAzHFonDo9dbAkVrg');
  
  export const GET = async (req: Request) => {
    try {
      const requestUrl = new URL(req.url);
      const { toPubkey } = validatedQueryParams(requestUrl);
  
      const baseHref = new URL(
        `/api/actions/donate-bark?to=${toPubkey.toBase58()}`,
        requestUrl.origin,
      ).toString();
  
      const payload: ActionGetResponse = {
        type: 'action',
        title: 'Donate BARK',
        icon: 'https://ucarecdn.com/31907163-7e33-4844-9515-d0a0cea6e2ef/donation_bark.png',
        description:
          'Solana Ecosystem | Support BARK with a BARK token donation.',
        label: 'Transfer',
        links: {
          actions: [
            {
              type: 'transaction',
              label: 'Send 10 BARK',
              href: `${baseHref}&amount=${'10'}`,
            },
            {
              type: 'transaction',
              label: 'Send 50 BARK',
              href: `${baseHref}&amount=${'50'}`,
            },
            {
              type: 'transaction',
              label: 'Send 100 BARK',
              href: `${baseHref}&amount=${'100'}`,
            },
            {
              type: 'transaction',
              label: 'Send BARK',
              href: `${baseHref}&amount={amount}`,
              parameters: [
                {
                  name: 'amount',
                  label: 'Enter the amount of BARK to send',
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
  
      const barkToken = new Token(connection, BARK_MINT, TOKEN_PROGRAM_ID, account);
      const fromTokenAccount = await barkToken.getOrCreateAssociatedAccountInfo(account);
      const toTokenAccount = await barkToken.getOrCreateAssociatedAccountInfo(toPubkey);
  
      const transferInstruction = Token.createTransferInstruction(
        TOKEN_PROGRAM_ID,
        fromTokenAccount.address,
        toTokenAccount.address,
        account,
        [],
        amount * 1e9 // Assuming BARK has 9 decimal places, adjust if different
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
          message: `Sent ${amount} BARK to: ${toPubkey.toBase58()}`,
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
    let amount: number = 10;
  
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
  
  