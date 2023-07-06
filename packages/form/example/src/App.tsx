import './App.css';
import { ElementBuilder, Elements, Sections, FormBuilder } from '@mui-builder/form';
import { TextField } from '@mui/material';

import React from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import MyForm from './Test/Test';

function App() {
  const elements = [
    {
      type: 'sections',
      list: [1],
      elements: [
        {
          type: 'sections',
          list: [1],
        },
      ],
      element: {
        type: 'sections',
        list: [1],
      },
    },
  ];

  const { register, control, handleSubmit, watch } = useForm({
    // defaultValues: {
    //   test: [{ book: '' }],
    // },
  });
  // const { fields, append, remove } = useFieldArray({
  //   control,
  //   name: 'test',
  // });

  // console.log(
  //   'watch',
  //   watch((value, { name, type }) => console.log(value, name, type)),
  // );

  // console.log('fields', fields);

  const onSubmit = (data: any) => console.log(data);

  return (
    <div>
      {/* <Sections list={[1]} /> */}
      {/* <Elements list={elements} /> */}
      <ElementBuilder
        component='sectionBuilder'
        element={{
          component: 'sectionBuilder',
          children: '- level 2',
          element: {
            component: 'sectionBuilder',
            children: '- level 3',
            element: { component: 'sectionBuilder', children: '- level 4' },
          },
        }}
      >
        level 1
      </ElementBuilder>

      <FormBuilder
        fields={[
          {
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

          {
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
          {
            name: 'test2',
            label: 'label',
            type: 'text',
            controller: 'console.log(fields); if(fields.test3 === "12") return {sx:{bgcolor: "red" , transition: "0.5s"} , helperText: "salam"}',
            rules: { 
              minLength: {
                value: 10,
                message: 'Minimum length is 10',
              },
              required: 'Email is required',
            },
          },
        ]}
        onSubmit={(e:any) => console.log('hi', e)}
      />

      <MyForm />
    </div>
  );
}

export default App;
