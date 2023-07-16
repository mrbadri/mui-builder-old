// mui
import React from 'react';

import { TextField, TextFieldProps, styled } from '@mui/material';

const preventBorderBottom = {
  '&:before': {
    borderBottom: 'none !important',
  },
  '&:after': {
    borderBottom: 'none !important',
  },
};

const BaseInput = styled((props: TextFieldProps) => (
  <TextField InputProps={{ disableUnderline: true }} variant='filled' {...props} />
))(({ theme }) => ({
  '& .MuiInputLabel-root': {
    color: theme.palette.grey[500] + ' !important',

    '& .MuiInputLabel-asterisk': {
      color: theme.palette.error.main + ' !important',
    },

    '&.Mui-disabled': {
      color: theme.palette.grey[400] + ' !important',
    },
  },

  '& .MuiFilledInput-root': {
    border: 'solid 1px',
    borderColor: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.grey[100],
    borderRadius: '4px',
    backgroundColor: theme.palette.background.paper,
    ...preventBorderBottom,

    '& input': {
      transition: 'background-color 5000s ease-in-out 0s',
      boxShadow: 'none !important',
    },

    '&:hover': {
      background: theme.palette.background.paper,
      borderColor: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.grey[300],

      ...preventBorderBottom,
    },

    '&.Mui-focused': {
      background: theme.palette.background.paper,
      borderColor: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.primary.main,

      ...preventBorderBottom,
    },

    '&.Mui-error': {
      background: theme.palette.background.paper,
      borderColor: theme.palette.mode === 'dark' ? theme.palette.error.dark : theme.palette.error.main,
      '& input': {
        color: theme.palette.error.main,
      },
    },

    '&.Mui-disabled': {
      background: theme.palette.grey[50] + 90,
      cursor: 'not-allowed',

      '& input': {
        cursor: 'not-allowed',
      },

      '&:hover': {
        borderColor: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.grey[200],
      },

      ...preventBorderBottom,
    },
  },
}));

export default BaseInput;
