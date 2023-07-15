import React, { useLayoutEffect } from 'react';
import { useConfig } from './useConfig';

function ConfigProvider({ children, api }: any) {
  const config: any = useConfig();

  useLayoutEffect(() => {
    config.setApi(api);
  }, [api]);

  return <>{children}</>;
}

export default ConfigProvider;
