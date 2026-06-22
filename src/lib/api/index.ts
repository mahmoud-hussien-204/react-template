import { apiInterceptor } from "./interceptor"

export function apiGetMe() {
  return apiInterceptor("/me")
}
