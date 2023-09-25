import { UseQueryOptions } from "@tanstack/react-query";

export interface TCol {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
}


export type TQuery = Omit<
UseQueryOptions,
'initialData'
> & { initialData?: () => undefined }