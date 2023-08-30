import React from 'react';
import BaseInput from '../BaseInput/BaseInput';

const Textarea = (props: any) => {
  return <BaseInput fullWidth multiline {...props} />;
};

export default Textarea;
