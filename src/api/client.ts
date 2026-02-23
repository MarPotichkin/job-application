import { API_BASE_URL } from "./config";
import { ApiError } from "./errors/api-error";
import type { ApiErrorDTO } from "./errors/api-error.dto";

export async function apiFetch<T>(
  path: string,
  options?: RequestInit,
): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    ...options,
  });

  if (!response.ok) {
    const errorBody: Partial<ApiErrorDTO> = await response
      .json()
      .catch(() => ({}));

    const message =
      typeof errorBody.error === "string"
        ? errorBody.error
        : "Something went wrong";

    throw new ApiError(message);
  }
  return response.json() as Promise<T>;
}
