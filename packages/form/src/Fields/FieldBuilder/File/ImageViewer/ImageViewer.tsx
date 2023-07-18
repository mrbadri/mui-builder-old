import { Box } from '@mui/material';
import React from 'react';

const ImageViewer = ({ src }: any) => {
  return (
    <Box
      component='img'
      sx={{
        width: 150,
        height: 106,
      }}
      alt='image'
      src={src}
    />
  );
};

export default ImageViewer;
