import React, { FC } from 'react';
import { ACTION_TYPE, TActionBuilderProps } from './ActionsBuilder.types';
import { Button } from '@mui/material';

// TODO:
// - API
// -- method
// -- body
// -- params

// - title
// - variant => outlined, contained, text

const ActionBuilder: FC<TActionBuilderProps> = ({ type = ACTION_TYPE.SUBMIT }) => {
  return <Button>test222 , {type}</Button>;
};

export default ActionBuilder;
