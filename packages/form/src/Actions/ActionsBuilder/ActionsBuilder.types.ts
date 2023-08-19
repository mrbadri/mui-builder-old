export interface TActionBuilderApi {
  method: string;
  url: string;
  body: object;
  params: object;
}

export enum ACTION_TYPE {
  SUBMIT = 'submit',
}

export interface TActionBuilderProps {
  api?: TActionBuilderApi;
  type: ACTION_TYPE;
  title: string
}
