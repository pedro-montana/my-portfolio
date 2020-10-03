import React from 'react';
import { Link } from "react-router-dom";


const ArticlesList = ({articles}) => (
    <>
    {articles.map((article, key) => (
    <Link key={key} to={`/blog/article/${article.name}`}>
      <h3>{article.title}</h3>
      <p>{article.content[0].substring(0, 150)}...</p>
      <br/>
    </Link>
  ))}
  </>
  )

export default ArticlesList;