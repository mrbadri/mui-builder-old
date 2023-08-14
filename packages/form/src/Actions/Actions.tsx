import React, { FC } from 'react';
import { TActionsProps } from './Actions.types';

const Actions:FC<TActionsProps> = ({  list }) => {
  console.log("hi this is a tet")
  return (
    <>
      {Object.keys(list).map((_key: string): any => {
        // const actionProps: any = list[key];
        return <>Actions</>;
      })}
    </>
  );
};

export default Actions;
