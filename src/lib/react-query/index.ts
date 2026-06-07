import {
  MutationCache,
  QueryCache,
  QueryClient,
  type QueryKey,
} from "@tanstack/react-query"
import { handleError, handleSuccess } from "./utils"

export interface IBaseMeta {
  errorMessage?: string
  successMessage?: string
  showToast?: boolean
}

export type IQueryMeta = IBaseMeta

export interface IMutationMeta extends IBaseMeta {
  invalidateQueries?: QueryKey[]
}

declare module "@tanstack/react-query" {
  interface Register {
    defaultError: IApiError
    queryMeta: IQueryMeta
    mutationMeta: IMutationMeta
  }
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60_000,
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
  queryCache: new QueryCache({
    onError: (error, query) => {
      handleError(error, query.meta)
    },
  }),

  mutationCache: new MutationCache({
    onError: (error, _variables, _context, mutation) => {
      handleError(error, mutation.meta)
    },
    onSuccess: (data, _variables, _context, mutation) => {
      handleSuccess(data as IApiResponse, mutation.meta)
    },
  }),
})
