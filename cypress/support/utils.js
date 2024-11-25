export const extractHostname = (url) => {
  try {
    // Try parsing as a complete URL first
    const urlObject = new URL(url)
    return urlObject.host?.length > 0 ? urlObject.host : url
  } catch (e) {
    // If URL parsing fails (e.g., for strings without scheme),
    // clean the string manually
    return url
      .replace(/^https?:\/\//, '') // Remove scheme if present
      .replace(/\/.*$/, '') // Remove path if present
      .replace(/^\/*/, '') // Remove leading slashes
      .replace(/\/*$/, '') // Remove trailing slashes
  }
}
