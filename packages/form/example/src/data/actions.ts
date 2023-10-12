import { TListActionProps } from '@mui-builder/form';
import { ACTION_TYPE } from '@mui-builder/form';

export const actionsSampleOne: TListActionProps = {
  submit: {
    col: { xs: 6 },
    type: ACTION_TYPE.SUBMIT,
    title: 'Submit',
    api: {
      config: {
        url: 'return "https://jsonplaceholder.typicode.com/todos/" + controller?.forms[controller.formId].getValues().FieldText1; ',
        // params: { id: 1 },
        method: 'post',
        data: "console.log('test form value' , controller?.forms[controller.formId].getValues());  return controller?.forms[controller.formId].getValues();",
      },
      query: {
        onError:
          " if (controller?.updateField) controller?.updateField({formId:controller?.formId, id:'multiSelect2' ,field: { label: 'testHook49999999'  }});",
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
