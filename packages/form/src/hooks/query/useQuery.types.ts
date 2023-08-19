export type QueryFunction<TData, TVariables> = (variables: TVariables) => Promise<TData>;

export interface QueryResult<TData> {
  data: TData | null;
  error: Error | null;
  isLoading: boolean;
  isError: boolean;
}
