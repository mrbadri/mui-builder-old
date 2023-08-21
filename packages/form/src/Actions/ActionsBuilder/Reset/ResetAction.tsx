import React, { FC } from "react";

import { TActionBuilderProps } from "../ActionsBuilder.types";
import useFormController from "../../../hooks/formController/formController";
import LoadingButton from '@mui/lab/LoadingButton';


const ResetAction: FC<TActionBuilderProps> = ({ title, formId }) => {
    const { forms } = useFormController();
    const form = forms[formId];

    return <LoadingButton type="reset" onClick={() => { form.reset() }}>{title}</LoadingButton>
}

export default ResetAction;