import React, { useMemo } from 'react';
import { TActionsProps } from './Actions.types';

const Actions = ({  list }: TActionsProps) => {
  return (
    <>
      {Object.keys(list).map((key: string): any => {
        const fieldProps: any = list[key];
        return <>Actions</>;
      })}
    </>
  );
};

export default Actions;
