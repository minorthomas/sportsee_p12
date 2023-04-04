import { useEffect, useState } from 'react';

export function useFetch(url) {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState({});
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!url) return;
        setIsLoading(true);

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

    return { isLoading, data, error };
}
