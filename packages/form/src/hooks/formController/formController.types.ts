import { FieldValues, UseFormReturn } from 'react-hook-form';

export type TForm = UseFormReturn<FieldValues, any, undefined>;

export type TFormControllerState = {
  forms: Record<string, TForm>;
  setForm: (key: string, form: TForm) => void;
};
