import React, { FC } from "react";

import { TActionBuilderProps } from "../ActionsBuilder.types";
import LoadingButton from '@mui/lab/LoadingButton';

const SubmitAction: FC<TActionBuilderProps> = ({ 
    sx,
    size,
    title,
    color,
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
    return <LoadingButton
        sx={sx}
        size={size}
        color={color}
        type="submit"
        endIcon={endIcon}
        loading={loading}
        disabled={disabled}
        startIcon={startIcon}
        fullWidth={fullWidth}
        variant={variant || 'contained'}
        disableElevation={disableElevation}
        loadingIndicator={loadingIndicator}
        disableFocusRipple={disableFocusRipple}
    >
        {title}
    </LoadingButton>
}

export default SubmitAction;