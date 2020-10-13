import React from 'react';
import { Link } from "react-router-dom";

const scrollTop = () => {
  window.scrollTo({top: 0, behavior: 'auto'});
};

const ArticlesList = ({articles}) => (
    <>
    {articles.map((article, key) => (
    <Link className="blog-article-link" style={{scrollBehavior: "auto"}} key={key} to={`/my-portfolio/blog/article/${article.name}`} onClick={scrollTop}>
      <h3>{article.title}</h3>
      <p>{article.content[0].substring(0, 150)}...</p>
      <br/>
    </Link>
  ))}
  </>
  )

export default ArticlesList;