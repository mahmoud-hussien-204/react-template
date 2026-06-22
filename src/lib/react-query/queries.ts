import { queryOptions } from "@tanstack/react-query"
import { QUERY_KEYS } from "./keys"
import { apiGetMe } from "../api"

export const QUERIES = {
  me: queryOptions({
    queryKey: [QUERY_KEYS.me],
    queryFn: apiGetMe,
    staleTime: Infinity,
  }),
}
