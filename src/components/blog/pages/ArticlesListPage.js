import React from "react";
import ArticlesList from '../components/ArticlesList';
import articleContent from "./article-content";
import NavBlog from "../components/NavBlog";


const ArticlesListPage = () => (
  <div id="blog-body">
    <NavBlog />
    <h1 className="text-secondary">Articles</h1>
    <hr style={{textAlign: "left",marginLeft:"0",width:"50%",minWidth:"200px"}}/>
    <ArticlesList articles={articleContent} />
  </div>
);

export default ArticlesListPage;
