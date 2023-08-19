import React, { FC, useLayoutEffect } from 'react';
import { useConfig } from '../../hooks/config/useConfig';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TConfigProviderProps } from './ConfigProvider.types';

const ConfigProvider: FC<TConfigProviderProps> = ({ children, api }) => {
  const { setApi } = useConfig();

  useLayoutEffect(() => {
    if (api)
      setApi(api);
  }, [api]);

  const queryClient = new QueryClient()

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>

}

export default ConfigProvider;
