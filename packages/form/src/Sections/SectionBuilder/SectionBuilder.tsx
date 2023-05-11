import React from 'react';
import Nested from '../../utils/Nested/Nested';

const SectionBuilder = (props: any) => {
  return <Nested>{props?.children || '--Sections 2Builder--'}</Nested>;
};

export default SectionBuilder;
