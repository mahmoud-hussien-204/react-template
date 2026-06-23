import { apiInterceptor } from "@/lib/api/interceptor"
import type { ILoginSchema } from "../validations"

export function apiLogin(body: ILoginSchema) {
  return apiInterceptor<IAuthUser>("/auth/login", {
    method: "POST",
    body: JSON.stringify(body),
  })
}
