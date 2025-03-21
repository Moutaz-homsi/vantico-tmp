export const getTestFlag = (key = "test_mode", allowForDev = true) => {
  if (allowForDev && process.env.NODE_ENV === "development") return true
  if (typeof window === "undefined") return false
  return localStorage.getItem(key) != null
}
