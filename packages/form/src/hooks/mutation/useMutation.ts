import { useState, useCallback } from 'react';
import { MutationFunction, MutationResult } from './useMutation.types';

function useMutation<TData, TVariables>(mutationFn: MutationFunction<TData, TVariables>): MutationResult<TData> {
  const [data, setData] = useState<TData | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  const mutate = useCallback(
    async (variables: TVariables) => {
      setLoading(true);
      try {
        const result = await mutationFn(variables);
        console.log('----------------------- ------------ ', { result: result });
        setData(result);
        setError(null);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    },
    [mutationFn],
  );

  const isError = error !== null;

  return { data, error, isLoading, isError, mutate };
}

export default useMutation;
