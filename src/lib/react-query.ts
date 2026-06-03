import {
  MutationCache,
  QueryCache,
  QueryClient,
  type QueryKey,
} from "@tanstack/react-query"

interface IBaseMeta {
  errorMessage?: string
  successMessage?: string
  showToast?: boolean
}

type IQueryMeta = IBaseMeta

interface IMutationMeta extends IBaseMeta {
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
      handleApiError(error, query.meta)
    },
  }),

  mutationCache: new MutationCache({
    onError: (error, _variables, _context, mutation) => {
      handleApiError(error, mutation.meta)
    },
  }),
})

function handleApiError(error: IApiError, meta?: IBaseMeta) {
  if (error.status === 401) {
    return
  }

  const shouldShowToast = meta?.showToast ?? true

  if (shouldShowToast) {
    // toast.error(meta?.errorMessage ?? error.message)
  }
}
