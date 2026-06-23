import { queryClient } from "@/lib/react-query"
import { QUERIES } from "@/lib/react-query/queries"
import { storage } from "@/lib/storage"
import { redirect } from "react-router"

export async function rootLoader() {
  console.log("root loader")
  try {
    const token = storage.token.get()
    if (!token) return null
    await queryClient.ensureQueryData(QUERIES.me)
    return null
  } catch {
    storage.token.delete()
    throw redirect("/auth/login")
  }
}

export async function authLoader() {
  console.log("auth loader")
  const user = queryClient.getQueryData(QUERIES.me.queryKey)
  if (user) {
    throw redirect("/")
  }
  return null
}

export async function appLoader() {
  console.log("app loader")
  const user = queryClient.getQueryData(QUERIES.me.queryKey)
  if (!user) {
    throw redirect("/auth/login")
  }
  return null
}
