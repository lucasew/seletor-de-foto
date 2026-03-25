function reportError(error, context = {}) {
    // Centralized error reporting
    // If Sentry was available, it would report here: Sentry.captureException(error, { extra: context });
    console.error("Centralized Error Report:", error, context);
}
