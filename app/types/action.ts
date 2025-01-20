/**
 * Represents the standard response format for actions in the Bark AI Agent Dashboard.
 */
export interface ActionResponse {
  /**
   * Indicates whether the action was successful.
   */
  success: boolean;

  /**
   * Optional data returned by the action.
   * This can be of any type, depending on the specific action.
   */
  data?: any;

  /**
   * Optional error message if the action was not successful.
   */
  error?: string;
}

/**
 * Represents a typed version of ActionResponse where the data property is of a specific type T.
 */
export interface TypedActionResponse<T> extends Omit<ActionResponse, 'data'> {
  /**
   * Data returned by the action, typed as T.
   */
  data?: T;
}

