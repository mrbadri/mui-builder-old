import { Button } from "@mui/material";
import React, { FC } from "react";
import { TActionBuilderProps } from "../ActionsBuilder.types";

const ResetAction: FC<TActionBuilderProps> = ({ title, formId }) => {
    console.log('form is reset action:', formId)
    return <Button type="reset">{title}</Button>
}

export default ResetAction