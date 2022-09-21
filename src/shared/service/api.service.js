import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://swapi.dev/api/people/',
});
const fetchCharacters = () => instance.get(``);

const fetchCharactersById = id => instance.get(`/${id}`);

const instanceProducts = axios.create({
  baseURL: 'https://62becfba0bc9b125615fd0f7.mockapi.io/api/products?',
  params: {
    page: 1,
    limit: 10,
  },
});

const fetchProducts = page => instanceProducts.get('', { params: { page } });

export const api = {
  fetchCharacters,
  fetchCharactersById,
  fetchProducts,
};
