import { TFormId } from '../../components/Forms/FormBuilder/FormBuilder.types';
import { TForm } from '../../types/public';

export interface TAddFormsProps {
  formId: TFormId;
  form: TForm;
}

export type TFormState = {
  forms: Record<string, TForm>;
  addForms: (props: TAddFormsProps) => void;
};
