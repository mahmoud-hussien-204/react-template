import { STORAGE_KEYS } from "./keys"

const token = {
  get() {
    const tokenString = localStorage.getItem(STORAGE_KEYS.token)
    return tokenString
  },
  set(token: string) {
    localStorage.setItem(STORAGE_KEYS.token, token)
  },
  delete() {
    localStorage.removeItem(STORAGE_KEYS.token)
  },
}

export const storage = {
  token,
}
