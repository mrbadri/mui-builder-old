import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

type FormData = {
  email: string;
};

function MyForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name='email'
        control={control}
        defaultValue=''
        rules={{
          required: 'Email is required',
          minLength: {
            value: 10,
            message: 'Minimum length is 10',
          },
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: 'invalid email address',
          },
        }}
        render={({ field }) => (
          <TextField
            {...field}
            about='test'
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : null}
            label='Ema2il'
            variant='outlined'
            // eslint-disable-next-line no-new-func
            {...new Function('fields', 'console.log("hey")' || '')(watch())}
          />
        )}
      />
      <button type='submit'>Submit2</button>
    </form>
  );
}

export default MyForm;
