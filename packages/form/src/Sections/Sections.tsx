import React from 'react';

import SectionBuilder from './SectionBuilder/SectionBuilder';

import Elements from '../Elements/Elements';
import ElementBuilder from '../Elements/ElementBuilder/ElementBuilder';

const Sections = (props: any) => {
  return (
    <>
      {props.list.map((sectionsProps: any, index: number) => (
        <SectionBuilder key={index} {...sectionsProps} />
      ))}
      {props?.elements && <Elements list={props?.elements} />}
      {props?.element && <ElementBuilder type={props?.element?.type} {...props?.element} />}
    </>
  );
};

export default Sections;
