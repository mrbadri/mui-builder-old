import React, { FC } from 'react';
import { TActionsProps } from './Actions.types';
import ActionBuilder from './ActionsBuilder/ActionsBuilder';
import { ACTION_TYPE } from './ActionsBuilder/ActionsBuilder.types';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

const Actions: FC<TActionsProps> = ({ list, formId }) => {
  return (
    <>
      {Object.keys(list).map((key, index): JSX.Element => {
        const { col = {}, ...actionProps } = list[key as ACTION_TYPE];
        const { xs = 12, sm, md, lg } = col;

        return (
          <Grid2 xs={xs} sm={sm} md={md} lg={lg}>
            <ActionBuilder key={index} formId={formId} {...actionProps} />
          </Grid2>
        );
      })}
    </>
  );
};

export default Actions;
