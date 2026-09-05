export async function edgeFunctionErrorMessage(error: unknown, fallback: string) {
  const context = (error as { context?: Response } | null)?.context
  if (context) {
    try {
      const payload = await context.clone().json() as { message?: unknown }
      if (typeof payload.message === 'string' && payload.message.trim()) return payload.message.trim()
    } catch {
      // Fall back to the SDK error message when the response is not JSON.
    }
  }
  return error instanceof Error && error.message ? error.message : fallback
}
