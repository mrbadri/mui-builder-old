import React, { FC } from 'react';
import { ACTION_TYPE, TActionBuilderProps } from './ActionsBuilder.types';
import SubmitAction from './Submit/Submit';

// TODO:
// - API
// -- method
// -- body
// -- params

// - title
// - variant => outlined, contained, text


const Controller: { [key in ACTION_TYPE]: React.FC<TActionBuilderProps> } = {
  [ACTION_TYPE.SUBMIT]: SubmitAction,
};

const ActionBuilder: FC<TActionBuilderProps> = (props) => {
  const Action = Controller?.[props?.type || ACTION_TYPE.SUBMIT];

  return <Action {...props} />;
};

export default ActionBuilder;
