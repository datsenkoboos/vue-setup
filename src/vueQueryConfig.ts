import { type VueQueryPluginOptions } from '@tanstack/vue-query';
import { type AxiosError } from 'axios';

const config: VueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        throwOnError: true,
        retry: (failureCount, e) => {
          const error = e as AxiosError;
          if (
            error.response?.status &&
            [400, 403, 404].includes(error.response.status)
          ) {
            return false;
          } else {
            return failureCount < 3;
          }
        },
      },
    },
  },
};
export default config;