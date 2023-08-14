import './App.css';

import service from './services/services';
import { fieldsSampleOne } from './data/fields';
import { actionsSampleOne } from './data/actions';
import { ConfigProvider, FormBuilder, Actions } from '@mui-builder/form';

function App() {
  // TODO:
  // api
  // react query => version ?
  // controller => api call handle
  // result api => field input
  // zushtand => provider (optional)

  return (
    <>
      <ConfigProvider api={service}>
        <FormBuilder fields={fieldsSampleOne}  onSubmit={(res: any) => console.log(res)} />
        <Actions list={actionsSampleOne} />
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
