import React from 'react';
import ElementBuilder from './ElementBuilder/ElementBuilder';

const Elements = (props: any) => {
  return props.list.map((elementProps: any, index: number) => <ElementBuilder key={index} {...elementProps} />);
};

export default Elements;
