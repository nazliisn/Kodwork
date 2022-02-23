import axios from 'axios';
import React, {useEffect, useState} from 'react';

function useFecth(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetch = async () => {
    try {
      const {data: responseData} = await axios.get(url);

      setData(responseData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return {data, loading, error};
}
export default useFecth;
