import React from 'react';

import Elements from '../../components/Elements/Elements';
import ElementBuilder from '../../components/Elements/ElementBuilder/ElementBuilder';

const Nested = (props: any) => {
  return (
    <>
      {props?.elements && <Elements list={props?.elements} />}
      {props?.element && <ElementBuilder type={props?.element?.type} {...props?.element} />}
    </>
  );
};

export default Nested;
