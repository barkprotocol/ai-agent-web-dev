/**
 * Debug mode state from environment variables
 * Can be controlled via NEXT_PUBLIC_DEBUG_MODE environment variable or localStorage
 */
export const isDebugMode = (): boolean => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('debug-mode') === 'true';
  }
  return process.env.NEXT_PUBLIC_DEBUG_MODE === 'true';
};

export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

export interface DebugOptions {
  module?: string;
  level?: LogLevel;
  timestamp?: boolean;
}

type LogFunction = (message: string, ...args: any[]) => void;

const logFunctions: Record<LogLevel, LogFunction> = {
  debug: console.debug,
  info: console.info,
  warn: console.warn,
  error: console.error,
};

/**
 * Debug logging function
 * @param message The log message
 * @param data Optional data object to log
 * @param options Logging options
 */
export function debugLog(
  message: string,
  data?: unknown,
  options: DebugOptions = {}
): void {
  if (!isDebugMode()) return;

  const { module = 'APP', level = 'debug', timestamp = true } = options;
  const logFn = logFunctions[level];

  let prefix = `[${module}] [${level.toUpperCase()}]`;
  if (timestamp) {
    prefix = `[${new Date().toISOString()}] ${prefix}`;
  }

  if (data !== undefined) {
    logFn(`${prefix} ${message}`, data);
  } else {
    logFn(`${prefix} ${message}`);
  }
}

/**
 * Create a debug logger for a specific module
 * @param module The module name
 * @returns A debug logger function for the specified module
 */
export function createDebugLogger(module: string) {
  return (message: string, data?: unknown, options: Omit<DebugOptions, 'module'> = {}) => {
    debugLog(message, data, { ...options, module });
  };
}

// Example usage
const logger = createDebugLogger('MyModule');
logger('This is a debug message', { someData: 123 });
logger('This is an error', new Error('Something went wrong'), { level: 'error' });

