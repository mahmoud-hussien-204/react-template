import { getLanguage } from "@/i18n"
import { storage } from "../storage"

const baseURL = import.meta.env.VITE_APP_API_BASE_URL

export async function apiInterceptor<RData>(
  url: string,
  options: RequestInit = { method: "GET" }
) {
  const request = interceptRequest(options)
  const response = await interceptResponse<RData>(url, request)
  return response
}

function interceptRequest(options: RequestInit): RequestInit {
  const accessToken = storage.token.get()

  const lang = getLanguage()

  const headers = new Headers({
    Accept: "application/json",
    "Accept-Language": lang,
    "Content-Language": lang,
    ...(options.headers || {}),
  })

  if (accessToken) {
    headers.set("Authorization", `Bearer ${accessToken}`)
  }

  if (options.body instanceof FormData) {
    headers.delete("Content-Type")
  } else {
    headers.set("Content-Type", "application/json")
  }

  return {
    ...options,
    headers,
  }
}

async function interceptResponse<RData>(
  url: string,
  request: RequestInit
): Promise<IApiResponse<RData>> {
  try {
    const response = await fetch(`${baseURL}/${url}`, request)

    const responseData = await response.json()

    if (!response.ok) {
      // logout if unauthorized
      if (response.status === 401) {
        storage.clear()
      }

      throw {
        status: response.status,
        message: responseData?.message,
        errors: responseData?.errors,
      } satisfies IApiError
    }
    return {
      message: responseData.message || "",
      data: responseData.data,
      meta: responseData.meta,
    }
  } catch (error) {
    throw {
      status: 500,
      message: (error as Error).message,
    }
  }
}
