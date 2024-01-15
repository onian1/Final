import { useState, useEffect } from 'react';

const useLocalStorageData = (url, storageKey) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedData = localStorage.getItem(storageKey);
        if (storedData) {
          setData(JSON.parse(storedData));
        } else {
          const response = await fetch(url);
          const result = await response.json();
          setData(result);
          localStorage.setItem(storageKey, JSON.stringify(result));
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, storageKey]);

  return { data, loading, error };
};

export default useLocalStorageData;