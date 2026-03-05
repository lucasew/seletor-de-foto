/**
 * Centralized error reporting function.
 * This should be used for all unexpected errors instead of raw console.error.
 */
export function reportError (error, context = {}) {
  console.error('Reported Error:', error, context)
  // Future integration point: Sentry.captureException(error, { extra: context });
}
