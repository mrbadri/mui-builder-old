import axios, { AxiosResponse } from 'axios';
import './App.css';
import { ConfigProvider, FormBuilder } from '@mui-builder/form';

// import MyForm from './Test/Test';

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
  // const elements = [
  //   {
  //     type: 'sections',
  //     list: [1],
  //     elements: [
  //       {
  //         type: 'sections',
  //         list: [1],
  //       },
  //     ],
  //     element: {
  //       type: 'sections',
  //       list: [1],
  //     },
  //   },
  // ];

  // TODO:
  // api
  // react query => version ?
  // controller => api call handle
  // result api => field input
  // zushtand => provider (optional)

  const fieldTest = {
    test: {
      name: 'test',
      label: 'test',
      type: 'text',
      // controller : 'console.log(fields); if(fields.test === "12") return {sx:{bgcolor: "red"} , helperText: "salam"}',
      rules: {
        minLength: {
          value: 10,
          message: 'Minimum length is 10',
        },
        required: 'Email is required',
      },
    },
    test3: {
      name: 'test3',
      label: 'test3',
      type: 'text',
      // controller : 'console.log(fields); if(fields.test === "12") return {sx:{bgcolor: "red"} , helperText: "salam"}',
      rules: {
        // minLength: {
        //   value: 10,
        //   message: 'Minimum length is 10',
        // },
        required: 'Email is required',
      },
    },
    test2: {
      name: 'test2',
      label: 'test2',
      type: 'text',
      controller:
        'if(fields.test3 === "12") return {sx:{bgcolor: "red" , transition: "0.5s"} , helperText: fields.test3, hide:true}',
      rules: {
        // minLength: {
        //   value: 10,
        //   message: 'Minimum length is 10',
        // },
        required: 'Email is required',
      },
    },
  };

  return (
    <div>
      {/* <ElementBuilder
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
      </ElementBuilder> */}

      {/* <ElementBuilder component='FormBuilder' fields={fieldTest} onSubmit={(res: any) => console.log(res)} /> */}
      <ConfigProvider api={createAxiosInstance('https://jsonplaceholder.typicode.com')}>
        <FormBuilder fields={fieldTest} onSubmit={(res: any) => console.log(res)} />
      </ConfigProvider>

      {/* <MyForm /> */}
    </div>
  );
}

export default App;
