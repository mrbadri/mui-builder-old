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
    text: {
      name: 'text',
      label: 'text',
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
    textarea: {
      name: 'textarea',
      label: 'textarea',
      type: 'textarea',
      rows: '2',
      rules: {
        required: 'textarea is required',
      },
    },
    radio: {
      name: 'radio',
      label: 'radio',
      type: 'radio',
      rules: {
        required: 'radio is required',
      },
      row: true,
      options: [
        {
          label: 'r1',
          value: 'val1',
        },
        {
          label: 'r2',
          value: 'val2',
        },
      ],
    },
    checkbox: {
      name: 'checkbox1',
      label: 'checkbox1',
      type: 'checkbox',
      rules: {
        required: 'checkbox is required',
      },
    },
    checkbox2: {
      name: 'checkbox2',
      label: 'checkbox2',
      type: 'checkbox',
      rules: {
        required: 'checkbox is required',
      },
    },
    select: {
      name: 'select',
      label: 'select',
      type: 'select',
      rules: {
        required: 'is required',
      },
      options: [
        { label: 'hi1', id: 1 },
        { label: 'hi2', id: 2 },
        { label: 'hi3', id: 3 },
        { label: 'hi4', id: 4 },
      ],
    },
  };

  return (
    <>
      <ConfigProvider api={createAxiosInstance('https://jsonplaceholder.typicode.com')}>
        <FormBuilder fields={fieldTest} onSubmit={(res: any) => console.log(res)} />
      </ConfigProvider>

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
      </ElementBuilder>

      <ElementBuilder component='FormBuilder' fields={fieldTest} onSubmit={(res: any) => console.log(res)} />
      <MyForm /> */}
    </>
  );
}

export default App;
