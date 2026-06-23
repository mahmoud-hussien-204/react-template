import { apiInterceptor } from "./interceptor"

export function apiGetMe() {
  return apiInterceptor<IAuthUser>("/me")
}
