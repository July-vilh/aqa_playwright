/**
 * Converts an object of request parameters into a URL query string.
 *
 * @param params - An object where keys are parameter names and values are parameter values.
 *                 Values can be either strings or arrays of strings.
 * @returns A string representing the URL query parameters, with parameters
 *          properly encoded and concatenated by '&'. If no parameters are provided,
 *          returns an empty string.
 */
export function convertRequestParams(params: Record<string, string>) {
  if (!params) return "";
  let url = "?";
  for (const key of Object.keys(params)) {
    if (Array.isArray(params[key])) {
      for (const value of params[key]) {
        url += `${url.length === 1 ? "" : "&"}${key}=${value.replaceAll(" ", "%20")}`;
      }
    } else {
      url += `${url.length === 1 ? "" : "&"}${key}=${params[key].replaceAll(" ", "%20")}`;
    }
  }
  return url;
}