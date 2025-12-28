/**
 * Centralized environment variables configuration
 * Validates required environment variables at build/runtime
 */

// Server-side only variables
const serverEnvVars = {
  backendUrl: process.env.BACKEND_URL,
  nodeEnv: process.env.NODE_ENV,
} as const;

// Client-side variables (must have NEXT_PUBLIC_ prefix)
const clientEnvVars = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL,
} as const;

// Validate server-side required variables
function validateServerEnv() {
  const required: (keyof typeof serverEnvVars)[] = ['backendUrl'];
  
  const missing = required.filter((key) => !serverEnvVars[key]);
  
  if (missing.length > 0) {
    throw new Error(
      `Missing required server environment variables: ${missing.join(', ')}\n` +
      `Please check your .env.local file.`
    );
  }
}

// Validate client-side required variables
function validateClientEnv() {
  const required: (keyof typeof clientEnvVars)[] = ['apiUrl'];
  
  const missing = required.filter((key) => !clientEnvVars[key]);
  
  if (missing.length > 0) {
    throw new Error(
      `Missing required client environment variables: ${missing.join(', ')}\n` +
      `Please check your .env.local file and ensure variables have NEXT_PUBLIC_ prefix.`
    );
  }
}

// Run validations
if (typeof window === 'undefined') {
  // Server-side
  validateServerEnv();
} else {
  // Client-side
  validateClientEnv();
}

/**
 * Server-side environment variables
 * Only accessible in Server Components, Server Actions, Route Handlers, and Middleware
 */
export const serverEnv = {
  backendUrl: serverEnvVars.backendUrl!,
  nodeEnv: serverEnvVars.nodeEnv || 'development',
  isProduction: serverEnvVars.nodeEnv === 'production',
  isDevelopment: serverEnvVars.nodeEnv === 'development',
} as const;

/**
 * Client-side environment variables
 * Accessible everywhere (including browser)
 */
export const clientEnv = {
  apiUrl: clientEnvVars.apiUrl!,
} as const;
