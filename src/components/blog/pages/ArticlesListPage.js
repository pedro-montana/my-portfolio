import React from "react";
import ArticlesList from '../components/ArticlesList';
import articleContent from "./article-content";
import NavBlog from "../components/NavBlog";


const ArticlesListPage = () => (
  <div id="blog-body">
    <NavBlog />
    <h1>Articles</h1>
    <ArticlesList articles={articleContent} />
  </div>
);

export default ArticlesListPage;
