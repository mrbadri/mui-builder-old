import './App.css';
import { ElementBuilder, FormBuilder } from '@mui-builder/form';

// import MyForm from './Test/Test';

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
  // 1. test controller how hide and shwo
  // 2. if field hide => value empty
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

      <FormBuilder fields={fieldTest} onSubmit={(res: any) => console.log(res)} />

      {/* <MyForm /> */}
    </div>
  );
}

export default App;
