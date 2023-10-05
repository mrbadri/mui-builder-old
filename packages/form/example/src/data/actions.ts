import { TListActionProps } from '@mui-builder/form';
import { ACTION_TYPE } from '@mui-builder/form';

export const actionsSampleOne: TListActionProps = {
  submit: {
    col: { xs: 6 },
    type: ACTION_TYPE.SUBMIT,
    title: 'Submit',
    api: {
      url: 'return "https://jsonplaceholder.typicode.com/todos/" + form.getValues().FieldText1; ',
      // params: { id: 1 },
      method: 'post',
      data: "console.log('test form value' , form.getValues()); return form.getValues();",
    },
    onError: (error, form) => {
      console.log('call back', error, form);
    },
    size: 'large',
    sx: {
      width: '100%',
    },
  },
  reset: {
    col: { xs: 6 },
    type: ACTION_TYPE.RESET,
    title: 'reset',
    api: { method: 'post' },
    size: 'large',
    sx: {
      width: '100%',
    },
  },
};
