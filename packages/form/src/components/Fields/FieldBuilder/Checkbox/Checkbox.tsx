import { Box, FormControlLabel, FormHelperText, Checkbox as MuiCheckbox } from '@mui/material';
import React from 'react';

const Checkbox = (props: any) => {
  const { helperText, error, options, ...otherProps } = props;
  return (
    <Box>
      <FormControlLabel
        control={<MuiCheckbox checked={!!props.value} name={props.name} {...otherProps} />}
        label={props.label}
      />
      <FormHelperText>{props.helperText}</FormHelperText>
    </Box>
  );
};

export default Checkbox;
