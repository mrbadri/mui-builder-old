export type TFormControllerState = {
  forms: Record<string, any>;
  setForm: (key: string, form: any) => void;
};