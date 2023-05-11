import React from 'react';
import Nested from '../../utils/Nested/Nested';

const SectionBuilder = (props: any) => {
  return (
    <>
      {props.children}
      <Nested {...props} />
    </>
  );
};

export default SectionBuilder;
