import convertFunction from '../convertFunction/convertFunction';
import isStringFunction from '../isStringFunction/isStringFunction';

// TODO #type
const handleQueryFn = async ({ api, config, controller }: any) => {

  const handleUrl = () => {
    if (isStringFunction(config.url)) return convertFunction(config?.url, 'controller')(controller);
    return config?.url;
  };

  const handleData = () => {
    if (typeof config?.data === 'string') return convertFunction(config?.data, 'controller')(controller);
    return config?.data;
  };

  const handleParams = () => {
    if (typeof config?.params === 'string') return convertFunction(config?.params, 'controller')(controller);
    return config?.params;
  };

  const handleHeader = () => {
    if (typeof config?.header === 'string') return convertFunction(config?.header, 'controller')(controller);
    return config?.header;
  };

  await api({
    ...config,
    url: handleUrl(),
    data: handleData() || {},
    params: handleParams() || {},
    headers: handleHeader() || {},
  });
};

export default handleQueryFn;
