import { useState } from 'react';

export const useFetching = (callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchStart, setSearchStart] = useState(true);

  const fetching = async (...args) => {
    try {
      setSearchStart(false);
      setIsLoading(true);
      setError(false);
      await callback(...args);
    } catch (e) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return [fetching, isLoading, error, searchStart];
};
