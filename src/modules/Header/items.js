import { nanoid } from 'nanoid';

const headerItems = [
  {
    id: nanoid(),
    to: '/',
    text: 'Home',
  },
  {
    id: nanoid(),
    to: '/products',
    text: 'Products',
  },
  {
    id: nanoid(),
    to: '/products-partners',
    text: 'Products from partner',
  },
  {
    id: nanoid(),
    to: '/contacts',
    text: 'Contacts',
  },
];

export default headerItems;
