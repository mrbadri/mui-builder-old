import React, { forwardRef } from 'react';
import BaseInput from '../BaseInput/BaseInput';

const Text = forwardRef((props: any, ref) => {
  return <BaseInput fullWidth {...props} ref={ref} />;
});

export default Text;
