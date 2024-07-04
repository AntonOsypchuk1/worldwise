export function getApiUrl(req?: any) {
  if (typeof window === "undefined") {
    const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
    const host = req?.headers.host.replace(/:\d+$/, ""); // Remove port number
    return `${protocol}://${host}:8000`;
  } else {
    const host = window.location.host.replace(/:\d+$/, "");
    return `${window.location.protocol}//${host}:8000`;
  }
}
