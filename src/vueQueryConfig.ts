import { type VueQueryPluginOptions } from '@tanstack/vue-query';
import { type AxiosError } from 'axios';

const config: VueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: {
      mutations: {
        retry: retryFn,
      },
      queries: {
        retry: retryFn,
        throwOnError: true,
      },
    },
  },
};

function retryFn(failureCount: number, e: unknown) {
  const error = e as AxiosError;
  if (
    error.response?.status
    && [400, 403, 404].includes(error.response.status)
  ) {
    return false;
  } else {
    return failureCount < 2;
  }
}

export default config;
