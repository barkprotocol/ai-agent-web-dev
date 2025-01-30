export const BigInt = (value: number | string): bigint => {
  if (typeof globalThis !== "undefined" && typeof globalThis.BigInt === "function") {
    return globalThis.BigInt(value)
  } else if (typeof global !== "undefined" && typeof global.BigInt === "function") {
    return global.BigInt(value)
  } else if (typeof window !== "undefined" && typeof window.BigInt === "function") {
    return window.BigInt(value)
  } else {
    // Fallback implementation
    const num = Number(value)
    return {
      valueOf: () => num,
      toString: () => num.toString(),
    } as unknown as bigint
  }
}

