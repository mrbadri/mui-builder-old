import React, { ReactNode } from 'react';

const HyperLink = (props: { href: string; children: ReactNode }) => {
  return (
    <>
      <a href={props.href}>{props.children}</a>
    </>
  );
};

export default HyperLink;
