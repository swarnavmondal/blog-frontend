import React from 'react';
import { Link } from "react-router-dom";

const ArticleList = ({articles}) => {
  return (
    <>
      {articles.map(article => (
        <div key={article._id}>
          <h6><Link to={"/article/"+article._id}>{article.title}</Link></h6>
          <p>{article.content} </p>
        </div>
      ))}
    </>
  );
}

export default ArticleList;
