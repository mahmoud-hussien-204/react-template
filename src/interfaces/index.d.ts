interface IApiError extends Error {
  status: number
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
