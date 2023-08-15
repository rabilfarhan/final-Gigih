import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (endpoint, config, action, dependencies) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const baseUrl = 'https://breakable-cyan-crow.cyclic.app/api';

    const DEFAULT_CONFIG = {
        method: 'GET',
        headers: { "Content-Type": "application/json" },
        url: `${baseUrl}/${endpoint}`
    };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const res = await axios.request({ ...DEFAULT_CONFIG, ...config });

            setData(res.data.data || res.data);

            if (action) {
                action(res.data.data || res.data)
            }
            setIsLoading(false);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [dependencies]);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch }
}