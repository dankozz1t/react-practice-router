import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://swapi.dev/api/people/',
});
const fetchCharacters = () => instance.get(``);

const fetchCharactersById = id => instance.get(`/${id}`);

export const api = {
  fetchCharacters,
  fetchCharactersById,
};
