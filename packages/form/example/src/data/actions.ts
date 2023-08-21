import { TListActionProps } from '@mui-builder/form';
import { ACTION_TYPE } from '@mui-builder/form';

export const actionsSampleOne: TListActionProps = {
  submit: {
    type: ACTION_TYPE.SUBMIT,
    title: 'Submit',
    api: { url: 'https://jsonplaceholder.typicode.com/todos/2', method: 'post', data: { test: 'klsjlk' } },
    onError: (error, form) => {
      console.log('call back', error, form);
    },
  },
  reset: { type: ACTION_TYPE.RESET, title: 'reset', api: { method: 'post' } },
};
