export type MutationFunction<TData, TVariables> = (variables: TVariables) => Promise<TData>;

export interface MutationResult<TData> {
  data: TData | null;
  error: Error | null;
  isLoading: boolean;
  isError: boolean; // New property
  mutate: (variables: any) => void;
}
