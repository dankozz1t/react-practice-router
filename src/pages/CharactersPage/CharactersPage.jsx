import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from 'shared/service/api.service';

const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
    try {
      api
        .fetchCharacters()
        .then(data => {
          setCharacters(data.data.results);
        })
        .finally(() => {
          setIsLoading(true);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const elements = characters.map(({ name }, index) => {
    return (
      <li
        key={name}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '200px',
          borderBottom: '1px solid black',
        }}
      >
        <p>
          {index + 1}. {name}
        </p>
        <Link to={(index + 1).toString()}>More</Link>
      </li>
    );
  });

  return (
    <>
      <h2>Characters Page</h2>
      {isLoading ? <ul>{elements}</ul> : <p>Loading...</p>}
    </>
  );
};

export default CharactersPage;
