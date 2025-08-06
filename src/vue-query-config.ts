import type { VueQueryPluginOptions } from '@tanstack/vue-query'
import type { AxiosError } from 'axios'

const config: VueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: {
      mutations: {
        retry: retryFunction,
      },
      queries: {
        retry: retryFunction,
        throwOnError: true,
      },
    },
  },
}

function retryFunction(failureCount: number, error: unknown) {
  const axiosError = error as AxiosError
  return axiosError.response?.status
    && [400, 401, 403, 404, 405, 413, 422].includes(axiosError.response.status)
    ? false
    : failureCount < 2
}

export default config
