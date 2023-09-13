import React, { FC } from "react";

import { TActionBuilderProps } from "../ActionsBuilder.types";
import useFormController from "../../../../hooks/formController/formController";
import LoadingButton from '@mui/lab/LoadingButton';


const ResetAction: FC<TActionBuilderProps> = ({
    sx,
    size,
    color,
    title,
    formId,
    endIcon,
    loading,
    variant,
    disabled,
    startIcon,
    fullWidth,
    loadingIndicator,
    disableElevation,
    disableFocusRipple,
}) => {
    const { forms } = useFormController();
    const form = forms[formId];

    return <LoadingButton
        sx={sx}
        size={size}
        type="reset"
        color={color}
        endIcon={endIcon}
        loading={loading}
        disabled={disabled}
        startIcon={startIcon}
        fullWidth={fullWidth}
        variant={variant || 'outlined'}
        onClick={() => { form.reset() }}
        disableElevation={disableElevation}
        loadingIndicator={loadingIndicator}
        disableFocusRipple={disableFocusRipple}
    >
        {title}
    </LoadingButton>
}

export default ResetAction;