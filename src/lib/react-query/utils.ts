import type { IBaseMeta } from "."
import { toaster } from "../toaster"

function showToast(showToast: boolean | undefined) {
  return showToast ?? true
}

export function handleError(error: IApiError, meta?: IBaseMeta) {
  if (error.status === 401) return (location.pathname = "/auth/login")

  const shouldShowToast = showToast(meta?.showToast)

  if (shouldShowToast) {
    const msg = meta?.errorMessage ?? error.message
    toaster.error(msg)
  }
}

export function handleSuccess(data: IApiResponse, meta?: IBaseMeta) {
  const shouldShowToast = showToast(meta?.showToast)

  if (shouldShowToast) {
    const msg =
      (meta?.successMessage ?? data.message) ||
      "Operation completed successfully"
    toaster.success(msg)
  }
}
