import React from 'react';
import useLocalStorageData from '../../hooks/useLocalStorageData';

const Home = () => {
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1'; // Replace with your API endpoint
  const storageKey = 'randomText';
  const { data, loading, error } = useLocalStorageData(apiUrl, storageKey);

  return (
    <div>
      <h2>Home Page</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          <p>{data.title}</p>
          <p>{data.body}</p>
          {/* Add links as needed */}
          <a href="/">Link 1</a>
          <a href="/">Link 2</a>
        </div>
      )}
    </div>
  );
};

export default Home;
