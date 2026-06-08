// import { token } from "@/modules/auth/utils/token"

// const baseURL = import.meta.env.VITE_APP_API_URL

export async function apiInterceptor() {
  // url: string,
  // options: RequestInit = { method: "GET" }
  // try {
  //   const request = await interceptRequest(options)
  // } catch (error) {}
}

// async function interceptRequest(options: RequestInit) {
//   const accessToken = token.get()

//   const headers = new Headers({
//     "Accept-Language": "en",
//     "Content-Language": "en",
//     "Content-Type": "application/json",
//     Accept: "application/json",
//     ...(options.headers || {}),
//   })

//   if (accessToken) {
//     headers.set("Authorization", `Bearer ${accessToken}`)
//   }

//   if (options.body instanceof FormData) {
//     headers.delete("Content-Type")
//     headers.delete("Accept")
//   }

//   options.headers = headers

//   return options
// }
