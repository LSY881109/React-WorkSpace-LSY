import React from 'react';
import { useParams } from 'react-router-dom';
import Categories from '../components/Categories.jsx';
import NewsList from '../components/NewsList.jsx';

const NewsPage = () => {
  const params = useParams();
  const category = params.category || 'all';
  return (
    <div>
      <Categories />
      <NewsList category={category} />
    </div>
  );
};

export default NewsPage;
