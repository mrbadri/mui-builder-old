import React, { useEffect, useRef, useState } from 'react';
import { Box, FormHelperText } from '@mui/material';
import ImageViewer from './ImageViewer/ImageViewer';

const File = (props: any) => {
  const { helperText, error, onChange, value, multiple, ...otherProps } = props;
  const { setValue } = props.form;
  const inputFileRef = useRef<HTMLDivElement>(null);
  const [arr, setarr] = useState<any>([]);

  const sleepNow = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay));

  const handleFileChange = async (event: any) => {
    await sleepNow(1000);
    const file = event.target.files;
    Array.prototype.slice.call(file).map((file) => {
      setarr((prev: any) => [...prev, URL.createObjectURL(file)]);
    });
  };

  useEffect(() => {
    setValue(props.name, arr);
  }, [arr]);

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '10px',
      }}
    >
      <Box
        onClick={() => inputFileRef?.current?.click()}
        sx={{
          border: '1px dashed gray',
          p: 4,
          width: '50px',
          height: '40px',
          borderRadius: '8px',
        }}
      >
        <Box
          {...otherProps}
          component='input'
          type='file'
          multiple={multiple}
          sx={{
            display: 'none',
          }}
          onChange={handleFileChange}
          ref={inputFileRef}
        />
      </Box>
      {props.value.length ? props.value.map((img: any) => <ImageViewer src={img} />) : null}
      <FormHelperText>{helperText}</FormHelperText>
    </Box>
  );
};

export default File;
