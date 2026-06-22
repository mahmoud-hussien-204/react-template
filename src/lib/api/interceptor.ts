// import { token } from "@/modules/auth/utils/token"

import { getLanguage } from "@/i18n"
import { storage } from "../storage"

// const baseURL = import.meta.env.VITE_APP_API_URL

export async function apiInterceptor(
  url: string,
  options: RequestInit = { method: "GET" }
) {
  try {
    const request = await interceptRequest(options)
    console.log(request, url)
  } catch (error) {
    console.log(error)
  }
}

async function interceptRequest(options: RequestInit) {
  const accessToken = storage.token.get()

  const lang = getLanguage()

  const headers = new Headers({
    "Accept-Language": lang,
    "Content-Language": lang,
    "Content-Type": "application/json",
    Accept: "application/json",
    ...(options.headers || {}),
  })

  if (accessToken) {
    headers.set("Authorization", `Bearer ${accessToken}`)
  }

  if (options.body instanceof FormData) {
    headers.delete("Content-Type")
    headers.delete("Accept")
  }

  options.headers = headers

  return options
}
