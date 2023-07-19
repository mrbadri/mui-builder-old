import { FormHelperText } from '@mui/material';
import React, { useState } from 'react';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import persian_en from 'react-date-object/locales/persian_en';

const Datepicker = (props: any) => {
  const { helperText, error, locale, outputformat, ...otherProps } = props;

  const [date, setDate] = useState<any>('');

  const { setValue } = props.form;

  return (
    <>
      <DatePicker
        {...otherProps}
        value={new Date(date)}
        onChange={(e, value: any) => {
          const dateTypes: any = {
            en: new DateObject(value).format(),
            fa: new DateObject(value).convert(persian, persian_en).format(),
          };
          setValue(props.name, dateTypes);
          setDate(e);
        }}
        calendar={locale === 'fa' ? persian : ''}
        locale={locale === 'fa' ? persian_fa : ''}
      />
      <FormHelperText>{helperText}</FormHelperText>
    </>
  );
};

export default Datepicker;
