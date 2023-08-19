import React, { FC } from 'react';
import { TActionsProps } from './Actions.types';
import ActionBuilder from './ActionsBuilder/ActionsBuilder';
import { ACTION_TYPE, TActionBuilderProps } from './ActionsBuilder/ActionsBuilder.types';

const Actions: FC<TActionsProps> = ({ list }) => {
  return (
    <>
      {Object.keys(list).map((key): JSX.Element => {
        const actionProps: TActionBuilderProps = list[key as ACTION_TYPE];

        return <ActionBuilder {...actionProps} />;
      })}
    </>
  );
};

export default Actions;
