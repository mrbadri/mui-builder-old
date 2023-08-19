import { Button } from "@mui/material";
import React, { FC } from "react";
import { TActionBuilderProps } from "../ActionsBuilder.types";
import useFormController from "../../../hooks/formController/formController";

const ResetAction: FC<TActionBuilderProps> = ({ title, formId }) => {
    const { forms } = useFormController();
    const form = forms[formId];

    return <Button type="reset" onClick={() => { form.reset()}}>{title}</Button>
}

export default ResetAction;