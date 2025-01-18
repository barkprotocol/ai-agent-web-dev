import { processAction } from '@/server/actions/action';
import { dbGetActions } from '@/server/db/queries';

export const maxDuration = 300;
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      console.error('[cron/action] Unauthorized access attempt');
      return new Response('Unauthorized', { status: 401 });
    }

    const actions = await dbGetActions({
      triggered: true,
      completed: false,
      paused: false,
    });

    console.log(`[cron/action] Fetched ${actions.length} actions`);

    const now = new Date();
    const actionsToProcess = actions.filter((action) => {
      if (!action.frequency) {
        console.log(`[cron/action] Skipping action ${action.id} due to missing frequency`);
        return false;
      }

      if (!action.lastExecutedAt) {
        console.log(`[cron/action] Processing action ${action.id} for the first time`);
        return true;
      }

      const nextExecutionAt = new Date(
        action.lastExecutedAt.getTime() + action.frequency * 1000
      );

      const shouldProcess = now >= nextExecutionAt;
      if (shouldProcess) {
        console.log(`[cron/action] Processing action ${action.id}`);
      } else {
        console.log(`[cron/action] Skipping action ${action.id}, next execution at ${nextExecutionAt}`);
      }

      return shouldProcess;
    });

    console.log(`[cron/action] Processing ${actionsToProcess.length} actions`);

    const results = await Promise.allSettled(
      actionsToProcess.map((action) => processAction(action))
    );

    const successCount = results.filter((result) => result.status === 'fulfilled').length;
    const failureCount = results.filter((result) => result.status === 'rejected').length;

    console.log(`[cron/action] Processed ${successCount} actions successfully, ${failureCount} failed`);

    return Response.json({ 
      success: true, 
      processed: actionsToProcess.length,
      successful: successCount,
      failed: failureCount
    });
  } catch (error) {
    console.error('[cron/action] Unexpected error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}

