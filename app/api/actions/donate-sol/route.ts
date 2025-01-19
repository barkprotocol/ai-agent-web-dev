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
    LAMPORTS_PER_SOL,
    PublicKey,
    SystemProgram,
    Transaction,
  } from '@solana/web3.js';
  
  const headers = createActionHeaders();
  
  export const GET = async (req: Request) => {
    try {
      const requestUrl = new URL(req.url);
      const { toPubkey } = validatedQueryParams(requestUrl);
  
      const baseHref = new URL(
        `/api/actions/donate-sol?to=${toPubkey.toBase58()}`,
        requestUrl.origin,
      ).toString();
  
      const payload: ActionGetResponse = {
        type: 'action',
        title: 'Donate SOL to BARK',
        icon: 'https://ucarecdn.com/31907163-7e33-4844-9515-d0a0cea6e2ef/donation_sol.png',
        description:
          'Solana Ecosystem | Support BARK with a SOL donation.',
        label: 'Transfer',
        links: {
          actions: [
            {
              type: 'transaction',
              label: 'Send 0.1 SOL',
              href: `${baseHref}&amount=${'0.1'}`,
            },
            {
              type: 'transaction',
              label: 'Send 0.5 SOL',
              href: `${baseHref}&amount=${'0.5'}`,
            },
            {
              type: 'transaction',
              label: 'Send 1 SOL',
              href: `${baseHref}&amount=${'1'}`,
            },
            {
              type: 'transaction',
              label: 'Send SOL',
              href: `${baseHref}&amount={amount}`,
              parameters: [
                {
                  name: 'amount',
                  label: 'Enter the amount of SOL to send',
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
  
      const minimumBalance = await connection.getMinimumBalanceForRentExemption(0);
      if (amount * LAMPORTS_PER_SOL < minimumBalance) {
        throw `account may not be rent exempt: ${toPubkey.toBase58()}`;
      }
  
      const transferSolInstruction = SystemProgram.transfer({
        fromPubkey: account,
        toPubkey: toPubkey,
        lamports: amount * LAMPORTS_PER_SOL,
      });
  
      const { blockhash, lastValidBlockHeight } =
        await connection.getLatestBlockhash();
  
      const transaction = new Transaction({
        feePayer: account,
        blockhash,
        lastValidBlockHeight,
      }).add(transferSolInstruction);
  
      const payload: ActionPostResponse = await createPostResponse({
        fields: {
          type: 'transaction',
          transaction,
          message: `Sent ${amount} SOL to BARK: ${toPubkey.toBase58()}`,
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
      'BARKkeAwhTuFzcLHX4DjotRsmjXQ1MshGrZbn1CUQqMo',
    );
    let amount: number = 0.1;
  
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
  
  