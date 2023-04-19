import { useState, useEffect } from "react"

const useFetch = (url) => {
  
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw Error('Error')
        }
        return res.json()
      })
      .then(d => {
        setData(d)
        setIsLoading(false)
        setError(null)
      })
      .catch(err => {
        setError(err.message)
      })
  }, [url])
  
  
  return { data, isLoading, error };
}
 
export default useFetch;