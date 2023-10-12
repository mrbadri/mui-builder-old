import { TListActionProps } from '@mui-builder/form';
import { ACTION_TYPE } from '@mui-builder/form';

export const actionsSampleOne: TListActionProps = {
  submit: {
    col: { xs: 6 },
    type: ACTION_TYPE.SUBMIT,
    title: 'Submit',
    api: {
      config: {
        url: 'return "https://jsonplaceholder.typicode.com/todos/" + controller?.form.getValues().FieldText1; ',
        // params: { id: 1 },
        method: 'post',
        data: "console.log('test form value' , controller?.form.getValues());  return controller?.form.getValues();",
      },
      query: {
        onError:
          " if (controller?.updateField) controller?.updateField(controller?.formId, 'multiSelect2', { label: 'testHook49999999' , sx:{display: 'none !important'} });",
      },
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
    // api: { method: 'post' },
    size: 'large',
    sx: {
      width: '100%',
    },
  },
};
