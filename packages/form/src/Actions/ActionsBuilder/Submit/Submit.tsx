import React, { FC } from "react";

import { TActionBuilderProps } from "../ActionsBuilder.types";
import LoadingButton from '@mui/lab/LoadingButton';

const SubmitAction: FC<TActionBuilderProps> = ({ title }) => {
    return <LoadingButton type="submit">{title}</LoadingButton>
}

export default SubmitAction