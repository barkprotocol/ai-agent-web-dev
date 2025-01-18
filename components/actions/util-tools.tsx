import { z } from 'zod';

// Utility Tools
export const utilTools = {
  askForConfirmation: {
    displayName: '⚠️ Confirmation',
    description: 'Confirm the execution of a function on behalf of the user.',
    parameters: z.object({
      message: z.string().describe('The message to ask for confirmation'),
    }),
    execute: async ({ message }: { message: string }) => {
      return {
        data: {
          message,
        },
      };
    },
    render: (raw: unknown) => {
      const result = raw as { data: { message: string } };

      return (
        <div className="relative overflow-hidden rounded-2xl bg-muted/50 p-4">
          <div className="flex items-center gap-3">
            <p className="text-sm text-muted-foreground">
              {result.data.message}
            </p>
          </div>
        </div>
      );
    },
  },
};

// Example usage of the askForConfirmation tool
export function ConfirmationExample() {
  const handleConfirmation = async () => {
    const message = "Are you sure you want to proceed with this action?";
    const result = await utilTools.askForConfirmation.execute({ message });
    console.log("Confirmation result:", result);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Confirmation Example</h2>
      <button 
        onClick={handleConfirmation}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Request Confirmation
      </button>
      <div className="mt-4">
        {utilTools.askForConfirmation.render({ data: { message: "Example confirmation message" } })}
      </div>
    </div>
  );
}

