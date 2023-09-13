import { Box, FormControlLabel, FormHelperText, Radio, RadioGroup } from '@mui/material';
import React from 'react';

const RadioButton = (props: any) => {
  const { helperText, error, options, ...otherProps } = props;

  return (
    <Box>
      <RadioGroup {...otherProps} defaultValue={props?.defaultValue || null} name={props.name}>
        {options.map((option: any) => (
          <FormControlLabel key={option.value} value={option.value} label={option.label} control={<Radio />} />
        ))}
      </RadioGroup>
      <FormHelperText>{helperText}</FormHelperText>
    </Box>
  );
};

export default RadioButton;
