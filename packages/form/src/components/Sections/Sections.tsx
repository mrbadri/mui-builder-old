import React from 'react';

import SectionBuilder from './SectionBuilder/SectionBuilder';
import Nested from '../Nested/Nested';

const Sections = (props: any) => {
  return (
    <>
      {props.list.map((sectionsProps: any, index: number) => (
        <SectionBuilder key={index} {...sectionsProps} />
      ))}
      <Nested {...props} />
    </>
  );
};

export default Sections;
