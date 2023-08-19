import { Button } from "@mui/material";
import React, { FC } from "react";
import { TActionBuilderProps } from "../ActionsBuilder.types";

const SubmitAction: FC<TActionBuilderProps> = ({ title }) => {
    return <Button type="submit">{title}</Button>
}

export default SubmitAction