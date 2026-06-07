import { toast, type ExternalToast } from "sonner"

const success = (message: string, options?: ExternalToast) => {
  toast.success(message, options)
}

const error = (message: string, options?: ExternalToast) => {
  toast.error(message, options)
}

const warning = (message: string, options?: ExternalToast) => {
  toast.warning(message, options)
}

const info = (message: string, options?: ExternalToast) => {
  toast.info(message, options)
}

const loading = (message: string, options?: ExternalToast) => {
  toast.loading(message, options)
}

export const toaster = {
  success,
  error,
  warning,
  info,
  loading,
}
