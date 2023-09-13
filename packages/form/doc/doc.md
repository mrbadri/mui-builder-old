# Document Form Builder

## Json from Backend

```typescript
const input = {
  actions,
  fields,
};
```

### Fields

```typescript

export type TListFieldProps = Record<string, Omit<(TFieldProps & { col?: TCol }), 'id'>>;


export interface TFieldProps {
  label?: string;
  type: string;
  id: string;
  rules?: TFieldRules;
  controller?: string;
  col?: TCol;
}
```

