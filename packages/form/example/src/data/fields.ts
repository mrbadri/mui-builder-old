const text = {
  id: 'text',
  label: 'Email',
  type: 'text',
  col: { xs: 6 },
  // controller : 'console.log(fields); if(fields.test === "12") return {sx:{bgcolor: "red"} , helperText: "salam"}',
  rules: {
    // minLength: {
    //   value: 10,
    //   message: 'Minimum length is 10',
    // },
    required: 'Email is required',
  },
};
const textarea = {
  id: 'textarea',
  label: 'textarea',
  type: 'textarea',
  rows: '2',
  rules: {
    // required: 'textarea is required',
  },
};
const radio = {
  id: 'radio',
  label: 'radio',
  type: 'radio',
  rules: {
    // required: 'radio is required',
  },
  row: true,
  options: [
    {
      label: 'r1',
      value: 'val1',
    },
    {
      label: 'r2',
      value: 'val2',
    },
  ],
};
const checkbox = {
  id: 'checkbox1',
  label: 'checkbox1',
  type: 'checkbox',
  rules: {
    // required: 'checkbox is required',
  },
};
const checkbox2 = {
  id: 'checkbox2',
  label: 'checkbox2',
  type: 'checkbox',
  rules: {
    // required: 'checkbox is required',
  },
};
const select = {
  id: 'select',
  label: 'select',
  type: 'select',
  rules: {
    // required: 'is required',
  },
  options: [
    { label: 'hi1', value: 1 },
    { label: 'hi2', value: 2 },
    { label: 'hi3', value: 3 },
    { label: 'hi4', value: 4 },
  ],
};
const multiSelect = {
  id: 'multi-select',
  label: 'multi Select',
  type: 'multiSelect',
  rules: {
    required: 'multi Select is required',
  },
  options: [
    { label: 'hi1', value: 1 },
    { label: 'hi2', value: 2 },
    { label: 'hi3', value: 3 },
    { label: 'hi4', value: 4 },
  ],
};
const attachment = {
  id: 'attachment',
  label: 'attachment',
  type: 'attachment',
  multiple: true,
  // controller : 'console.log(fields); if(fields.test === "12") return {sx:{bgcolor: "red"} , helperText: "salam"}',
  rules: {
    // required: 'attachment is required',
  },
};
const datepicker = {
  id: 'datepicker',
  label: 'datepicker',
  type: 'datepicker',
  calendarPosition: 'bottom-right',
  format: 'YYYY/MM/DD',
  locale: 'fa',
  // controller : 'console.log(fields); if(fields.test === "12") return {sx:{bgcolor: "red"} , helperText: "salam"}',
  rules: {
    required: 'Date is required',
  },
};
const toggle = {
  id: 'toggle',
  label: 'toggle',
  type: 'toggle',
  value: false,
  // controller : 'console.log(fields); if(fields.test === "12") return {sx:{bgcolor: "red"} , helperText: "salam"}',
  rules: {
    required: 'toggle is required',
  },
};

export const fieldsSampleOne = {
  text,
  // textarea,
  // radio,
  // checkbox,
  // checkbox2,
  select,
  multiSelect,
  // attachment,
  // // this datepicker get all of react-multi-datepicker props
  // datepicker,
  // toggle,
};

// const saman = {
//   spacing: 2,
//   col: 12,
//   feilds: [
//     {
//       label: 'd[la[dp',
//       col: 6,
//       id: 'customfield_1025',

//     },
//     {
//       label: 'd[la[dp',
//       type: table,
//       col: 6,
//       id: 'customfield_1025',
//       fields: {}

//     }
//   ]
// }
