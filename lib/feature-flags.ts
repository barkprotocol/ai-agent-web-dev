const EARLY_PRODUCTION_FEATURES = {
  ENABLE_AGENT_PERFORMANCE: false,
  ENABLE_CHAT_INTERFACE: false,
  ENABLE_TOKEN_TRANSFER: false,
}

export function isFeatureEnabled(featureName: keyof typeof EARLY_PRODUCTION_FEATURES): boolean {
  return EARLY_PRODUCTION_FEATURES[featureName]
}

