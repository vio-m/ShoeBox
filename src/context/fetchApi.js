import axios from "axios"
import {useState, useEffect} from 'react'

export const FetchApi = (params) => {

    const [data, setData] = useState()
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getData() {
            try {
                const response = await axios.get(params);
                setData(response.data);
                setError(null);
            } catch (err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        };
        getData();
        console.log("data from fetch:", data)
    }, []);
    console.log("data from fetch:", data)

  return data
}


