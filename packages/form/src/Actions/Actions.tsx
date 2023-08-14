import React, { FC } from 'react';
import { TActionsProps } from './Actions.types';
import ActionBuilder from './ActionsBuilder/ActionsBuilder';
import { ACTION_TYPE } from './ActionsBuilder/ActionsBuilder.types';

const Actions: FC<TActionsProps> = ({ list }) => {
  return (
    <>
      {Object.keys(list).map((key): any => {
        const actionProps: any = list[key as ACTION_TYPE];

        return <ActionBuilder type={actionProps?.type} />;
      })}
    </>
  );
};

export default Actions;
