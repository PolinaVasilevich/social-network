import { useEffect, useState } from "react";
import axios from "axios";

import { IOptionsFetch } from "./types";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

function useFetch({
  url,
  method = "get",
  body = null,
  headers = { "Content-Type": "application/json" },
}: IOptionsFetch) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios[method](url, headers, body);
      setData(response.data);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error, loading };
}

export default useFetch;
