import { useState, useEffect } from 'react';
import { QueryFunction, QueryResult } from './useQuery.types';

function useQuery<TData, TVariables>(
  queryFn: QueryFunction<TData, TVariables>,
  variables: TVariables,
): QueryResult<TData> {
  const [data, setData] = useState<TData | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await queryFn(variables);
        setData(result);
        setError(null);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [queryFn, variables]);

  const isError = error !== null;

  return { data, error, isLoading, isError };
}

export default useQuery;
