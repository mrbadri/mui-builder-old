# Document Form Builder

## Json Form

```typescript
interface TJSONFrom {
  formId: string;
  actions: TActions;
  fields: TFields;
  config: TConfig;
}
```

## Public Interface

```typescript
interface TCol {
  xs?: number; // between 1 to 12 - default 12
  sm?: number; // between 1 to 12
  md?: number; // between 1 to 12
  lg?: number; // between 1 to 12
}
```

## Fields / TFields

```typescript
enum FIELD_TYPE {
  TEXT = 'text',
  TEXTAREA = 'textarea',
  SELECT = 'select',
  MULTI_SELECT = 'multiSelect',
  DATE_PICKER = 'datepicker',
  ATTACHEMNT = 'attachment',
  CHECKBOX = 'checkbox',
  RADIO = 'radio',
  TOGGLE = 'toggle',
}
```

```typescript
type TFieldId = string;
```

```typescript
interface TFieldProps {
  id: string;
  type: FIELD_TYPE | string;
  col?: TCol;
  label?: string;
  rules?: TFieldRules;
  script?: string;
  // Base on type of field have diffrent props
}
```

```typescript
type TFields = Record<TFieldId, TFieldProps>;
```

## Actions / TActions

```typescript
enum ACTION_TYPE {
  SUBMIT = 'submit',
  RESET = 'reset',
}
```

```typescript
interface TActionProps {
  api?: TApi;
  type: ACTION_TYPE | string;
  title: string;
  formId: TFormId;
  onSuccess?: (responseApi: unknown, form: TForm) => void;
  onError?: (responseApi: unknown, form: TForm) => void;
  loading?: boolean;
  loadingIndicator?: React.ReactNode;
  gPosition?: 'start' | 'end' | 'center';
  sx?: SxProps<Theme>;
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  disabled?: boolean;
  disableElevation?: boolean;
  disableFocusRipple?: boolean;
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
  href?: string;
  size?: 'small' | 'medium' | 'large';
  startIcon?: React.ReactNode;
  variant?: 'text' | 'outlined' | 'contained';
}
```

```typescript
type TActions = Record<ACTION_TYPE, TActionProps>;
```
