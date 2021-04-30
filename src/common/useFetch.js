import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url, {headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }})
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data => {
        setData(data);
        setError(null);
      })
      .catch(err => {
        // auto catches network / connection error
        setError(err.message);
      })
    }, 1000);
  }, [url])

  return { data, error };
}
 
export default useFetch;