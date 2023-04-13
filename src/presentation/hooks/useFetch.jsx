import { useEffect, useState } from 'react';

/**
 * Used to call data to an api via the fetch api
 * 
 * @param String - url
 * @return Array - data
 * @return Boolean - isLoading
 * @return Boolean - error
 */
export function useFetch(url) {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!url) return;
        setIsLoading(true);

        /**
         * Get data via fetch api
         * convert data to json
         * and add the data in the "data" state
         */
        async function fetchData() {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setData(json);
                setIsLoading(false);
                setError(false);
            } catch (error) {
                console.log(error);
                setError(true);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, [url]);

    return { data, isLoading, error };
}
