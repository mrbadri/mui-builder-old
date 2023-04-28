import React from 'react';
import SectionBuilder from './SectionBuilder/SectionBuilder'; 

const Sections = (props: any) => {
  return props.sections.map((sectionsProps: any, index: number) => <SectionBuilder key={index} {...sectionsProps} />);
};

export default Sections;
