import React, { FC } from 'react';
import { TActionsProps } from './Actions.types';
import ActionBuilder from './ActionsBuilder/ActionsBuilder';
import { ACTION_TYPE } from './ActionsBuilder/ActionsBuilder.types';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import useFormController from '../../hooks/formController/formController';

const Actions: FC<TActionsProps> = ({ formId }) => {
  const { formControllers } = useFormController();
  const { actions } = formControllers[formId];

  return (
    <>
      {Object.keys(actions).map((key): JSX.Element => {
        const { col = {}, ...actionProps } = actions[key as ACTION_TYPE];
        const { xs = 12, sm, md, lg } = col;

        return (
          <Grid2 key={key} xs={xs} sm={sm} md={md} lg={lg}>
            <ActionBuilder formId={formId} {...actionProps} />
          </Grid2>
        );
      })}
    </>
  );
};

export default Actions;
