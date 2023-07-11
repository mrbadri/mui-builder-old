import './App.css';
import { FormBuilder } from '@mui-builder/form';

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

  const fieldTest = {
    test:{
      name: 'test',
      label: 'label',
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
    test3:{
      name: 'test3',
      label: 'label',
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
    test2:{
      name: 'test2',
      label: 'label',
      type: 'text',
      controller: 'if(fields.test3 === "12") return {sx:{bgcolor: "red" , transition: "0.5s"} , helperText: fields.test3}',
      rules: { 
        minLength: {
          value: 10,
          message: 'Minimum length is 10',
        },
        required: 'Email is required',
      },
    },
  }



  
  return (
    <div>
      {/* <ElementBuilder
        component='SectionBuilder'
        element={{
          component: 'SectionBuilder',
          children: '- level 2',
          sx:{mt:'10'},
          element: {
            component: 'SectionBuilder',
            children: '- level 3',
            element: { component: 'SectionBuilder', children: '- level 4' },
          },
        }}
      >
        level 1
      </ElementBuilder> */}
      <FormBuilder
        fields={fieldTest}
        onSubmit={console.log}
      />

      {/* <MyForm /> */}
    </div>
  );
}

export default App;
