import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
 const [data, setData] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState([]);

 useEffect(() => {
  const fetchData = async () => {
   try {
    const response = await fetch(url, options);
    const result = await response.json();
    setData(result);
    setLoading(false);
   } catch (error) {
    setError(error);
    setLoading(false);
   }
  };

  fetchData();
 }, [url, options]);

 return { data, loading, error };
};



// import React from 'react';
// import useFetch from './useFetch';

// const MyComponent = () => {
//   const { data, loading, error } = useFetch('https://api.example.com/data');

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       {/* Render data */}
//     </div>
//   );
// };

// export default MyComponent;
