import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://swapi.dev/api/people/',
});
const fetchCharacters = () => instance.get(``);

const fetchCharactersById = id => instance.get(`/${id}`);

const LIMIT_PRODUCTS = 10;

const instanceProducts = axios.create({
  baseURL: 'https://62becfba0bc9b125615fd0f7.mockapi.io/api/products?',
});

const fetchProducts = page =>
  instanceProducts.get('', { params: { page, limit: LIMIT_PRODUCTS } });

const fetchTotalPage = () => {
  return instanceProducts.get('').then(({ data }) => {
    return Math.ceil(data.length / 10) + 1;
  });
};

export const api = {
  fetchCharacters,
  fetchCharactersById,
  fetchProducts,
  fetchTotalPage,
};
