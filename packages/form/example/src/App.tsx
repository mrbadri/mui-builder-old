import axios, { AxiosResponse } from 'axios';
import './App.css';
import { ConfigProvider, FormBuilder, Actions } from '@mui-builder/form';
import { fieldsSampleOne } from './data/fields';

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

function App() {
  // TODO:
  // api
  // react query => version ?
  // controller => api call handle
  // result api => field input
  // zushtand => provider (optional)

  return (
    <>
      <ConfigProvider api={createAxiosInstance('https://jsonplaceholder.typicode.com')}>
        <FormBuilder fields={fieldsSampleOne} onSubmit={(res: any) => console.log(res)} />

        <Actions list={{ test: { test: 'test', test2: 'test2' }, test2: { test: 'test', test2: 'test2' } }} />
      </ConfigProvider>
    </>
  );
}

export default App;

/* <ElementBuilder
        component='SectionBuilder'
        element={{
          component: 'SectionBuilder',
          children: '- level 2',
          sx: { mt: '10' },
          element: {
            component: 'SectionBuilder',
            children: '- level 3',
            element: { component: 'SectionBuilder', children: '- level 4' },
          },
        }}
      >
        level 1
      </ElementBuilder>

      <ElementBuilder component='FormBuilder' fields={fieldTest} onSubmit={(res: any) => console.log(res)} />
      <MyForm /> */
