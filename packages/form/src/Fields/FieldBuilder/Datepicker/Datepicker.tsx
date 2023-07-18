import { FormHelperText } from '@mui/material';
import React from 'react';
import DatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';

const Datepicker = (props: any) => {
  const { helperText, error, locale, ...otherProps } = props;
  return (
    <>
      <DatePicker
        value={new Date(props.value)}
        {...otherProps}
        calendar={locale === 'fa' ? persian : ''}
        locale={locale === 'fa' ? persian_fa : ''}
      />
      <FormHelperText>{helperText}</FormHelperText>
    </>
  );
};

export default Datepicker;
