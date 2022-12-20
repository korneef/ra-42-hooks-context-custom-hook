import { useState, useEffect } from "react";

export default function useJsonFetch(url, opts) {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url, { ...opts })
      .then(response => {
        if (response.status < 200 || response.status > 299) {
          throw new Error(`fetch failed with: ${response.status}`)
        }
        return response.json()})
      .then(response => {
        setResponse(response);
        setLoading(false);
      })
      .catch(error => {
        setError(`${error}`);
        setLoading(false);
      })
    }, [url, opts])



  return [response, loading, error]
}