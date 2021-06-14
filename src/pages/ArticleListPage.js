import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArticleList from '../components/ArticleList';

// import articleContent from '../pages/article-content';

const ArticleListPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/blog')
      .then(res => {
        setArticles(res.data);
        setLoading(false);
        console.log(res);
      });
  }, []);

 

  return (
    <>
   
        <title>Articles - My Blog</title>
     
      <main>
        <h1>Articles</h1>
        <ArticleList articles={articles}/>
      </main>
    </>
  );
}

export default ArticleListPage;
