import React from 'react';
import Nested from '../../Nested/Nested';
import { Box } from '@mui/material';

const SectionBuilder = (props: any) => {
  return (
    <Box {...props}>
      {props.children}
      <Nested {...props} />
    </Box>
  );
};

export default SectionBuilder;
