import './App.css';

import service from './services/services';
import { fieldsSampleOne } from './data/fields';
import { actionsSampleOne } from './data/actions';
import { ConfigProvider, FormBuilder, useForm } from '@mui-builder/form';
import { useEffect } from 'react';

function App() {
  // TODO:
  // api
  // // react query => version 
  // controller => api call handle
  // result api => field input
  // zushtand => provider (optional)

  // useEffect(() => {
  //   service.get('todos/2').then((res: any) => {
  //     console.log('🚀 ~ file: FormBuilder.tsx:23 ~ useEffect ~ res:', res);
  //   });
  // }, []);

  const form = useForm();
  console.log("jnksn" , form.formState.errors)

  return (
    <>
      <ConfigProvider >
        <FormBuilder fields={fieldsSampleOne} form={form} actions={actionsSampleOne} id="form id test" />
      </ConfigProvider>
    </>
  );
}

export default App;

/* 
<ElementBuilder
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
      <MyForm /> 
*/
