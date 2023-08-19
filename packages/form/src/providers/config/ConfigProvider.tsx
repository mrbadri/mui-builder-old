import React, { useLayoutEffect } from 'react';
import { useConfig } from '../../hooks/config/useConfig';

function ConfigProvider({ children, api }: any) {
  const { setApi } = useConfig();

  useLayoutEffect(() => {
    setApi(api);
  }, [api]);

  console.log({ api })

  return <>{children}</>;
}

export default ConfigProvider;
