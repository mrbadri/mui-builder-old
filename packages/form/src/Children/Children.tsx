import React from 'react';
import ChildrenBuilder from './ChildBuilder/ChildBuilder';

const Children = (props: any) => {
  return props.list.map((childrenProps: any, index: number) => <ChildrenBuilder key={index} {...childrenProps} />);
};

export default Children;
