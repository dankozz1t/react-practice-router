import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from 'shared/service/api.service';

const CharacterDetails = () => {
  const [character, setCharacter] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const { charactersId } = useParams();

  useEffect(() => {
    setIsLoading(false);

    try {
      api
        .fetchCharactersById(charactersId)
        .then(({ data }) => {
          setCharacter(data);
        })
        .finally(() => {
          setIsLoading(true);
        });
    } catch (error) {
      console.log(error);
    }
  }, [charactersId]);

  if (!isLoading) {
    return <p>Loading...</p>;
  }

  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    gender,
    birth_year,
  } = character;

  return (
    <div style={{ margin: '20px' }}>
      <h2>name: {name}</h2>
      <p>height: {height}</p>
      <p>mass: {mass}</p>
      <p>hair_color: {hair_color}</p>
      <p>skin_color: {skin_color}</p>
      <p>eye_color: {eye_color}</p>
      <p>gender: {gender}</p>
      <p>birth_year: {birth_year}</p>
    </div>
  );
};

export default CharacterDetails;
