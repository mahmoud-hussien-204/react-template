interface IApiError {
  status: number
  errors?: string[]
  message: string
}

interface IApiResponse<T = unknown> {
  message: string
  data: T
  meta: IApiResponseMeta
}

interface IApiResponseMeta {
  currentPage: number
  totalPages: number
}

type ITheme = "light" | "dark" | "system"

type IResolvedTheme = "light" | "dark"

type ILocale = "en" | "ar"

interface IAuthUser {
  email: string
  name: string
  accessToken: string
  role: IAuthUserRole
}

type IAuthUserRole = "admin" | "user"
