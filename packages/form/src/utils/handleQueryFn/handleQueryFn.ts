import convertFunction from '../convertFuunction/convertFuunction';
import isStringFunction from '../isStringFunction/isStringFunction';

const handleQueryFn = async ({ api, ApiConfig, form }: any) => {
  const handleUrl = () => {
    if (isStringFunction(ApiConfig.url)) return convertFunction(ApiConfig?.url, 'form')(form);
    return ApiConfig?.url;
  };

  const handleData = () => {
    if (typeof ApiConfig?.data === 'string') return convertFunction(ApiConfig?.data, 'form')(form);
    return ApiConfig?.data;
  };

  const handleParams = () => {
    if (typeof ApiConfig?.params === 'string') return convertFunction(ApiConfig?.params, 'form')(form);
    return ApiConfig?.params;
  };

  const handleHeader = () => {
    if (typeof ApiConfig?.header === 'string') return convertFunction(ApiConfig?.header, 'form')(form);
    return ApiConfig?.header;
  };

  await api({
    ...ApiConfig,
    url: handleUrl(),
    data: handleData() || {},
    params: handleParams() || {},
    headers: handleHeader() || {},
  });
};

export default handleQueryFn;
