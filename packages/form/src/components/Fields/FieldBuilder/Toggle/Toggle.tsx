import { Box, FormControlLabel, FormHelperText } from '@mui/material';
import Switch from '@mui/material/Switch';
import React from 'react';

const Toggle = (props: any) => {
  const { setValue } = props.form;

  return (
    <Box>
      <FormControlLabel
        control={
          <Switch
            checked={props.value}
            onChange={(event: any) => setValue(props.name, event.target.checked)}
            name={props.name}
          />
        }
        label={props.label}
      />
      <FormHelperText>{props.helperText}</FormHelperText>
    </Box>
  );
};

export default Toggle;
