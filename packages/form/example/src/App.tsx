import './App.css';

import { fieldsSampleOne } from './data/fields';
import { actionsSampleOne } from './data/actions';
import { ConfigProvider, FormBuilder, useForm } from '@mui-builder/form';

function App() {
  // TODO:
  // api`
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
  return (
    <>
      <ConfigProvider >
        <FormBuilder fields={fieldsSampleOne} form={form} config={{ layout: { spacing: 5 } }} actions={actionsSampleOne} id="form id test" />
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
