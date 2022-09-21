import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { api } from 'shared/service/api.service';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadMore, setIsLoadMore] = useState(true);
  const [totalPage, setTotalPage] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(searchParams.get('page') ?? 1);

  useEffect(() => {
    try {
      api.fetchTotalPage().then(data => {
        setTotalPage(data);
      });
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    if (totalPage === page) {
      setIsLoadMore(false);
      return;
    }

    setIsLoading(true);
    try {
      api
        .fetchProducts(page)
        .then(({ data }) => {
          setProducts(state => [...state, ...data]);
        })
        .finally(() => {
          setIsLoading(true);
        });
    } catch (error) {
      console.log(error.message);
    }
  }, [page, totalPage]);

  const handleLoadMoreClick = () => {
    setSearchParams(page !== 1 ? { page } : {});
    setPage(page + 1);
  };

  if (!isLoading) {
    return <>Loadding...</>;
  }

  const elements = products.map(({ name, description }, index) => (
    <li key={index}>
      <h3>{name}</h3>
      <p>{description}</p>
    </li>
  ));

  return (
    <>
      <h2>Products Page</h2>
      <ul style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        {elements}
      </ul>
      {isLoadMore && (
        <button type="button" onClick={handleLoadMoreClick}>
          Load more
        </button>
      )}
    </>
  );
};

export default ProductsPage;
