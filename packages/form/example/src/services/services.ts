import axios, { AxiosResponse } from 'axios';


const createAxiosInstance = (baseUrl?: string): any => {
    if (!baseUrl) throw new Error('base url is required for running program!');
    const instance = axios.create({
      baseURL: baseUrl,
    });
  
    instance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error: any) => {
        if (error.response?.status === 401) {
          console.log('401');
        }
        return Promise.reject(error);
      },
    );
  
    return instance;
  };

 const service =  createAxiosInstance('https://jsonplaceholder.typicode.com');

 export default service