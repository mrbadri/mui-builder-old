import React, { FC } from "react";

import LoadingButton from '@mui/lab/LoadingButton';
import useFromsStore from "../../../../hooks/useFormsStore/useFormsStore";
import { TActionBuilderProps } from "../ActionsBuilder.types";


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
    const { forms } = useFromsStore();
    const currentForm = forms[formId];

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
        onClick={() => { currentForm.reset() }}
        disableElevation={disableElevation}
        loadingIndicator={loadingIndicator}
        disableFocusRipple={disableFocusRipple}
    >
        {title}
    </LoadingButton>
}

export default ResetAction;