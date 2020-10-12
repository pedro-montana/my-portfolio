import React, { useState, useEffect } from "react";
import ArticlesList from '../components/ArticlesList';
import CommentsList from '../components/CommentsList';
import UpvotesSection from '../components/UpvotesSection';
import AddCommentForm from '../components/AddCommentForm';
import articleContent from "./article-content";
import NavBlog from "../components/NavBlog";


const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);

    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

    useEffect(() => {
      const fetchData = async () => {
        const result = await fetch(`/api/articles/${name}`);
        const body = await result.json();
        console.log(body);
        setArticleInfo(body);
      }
      fetchData();
    }, [name]);

    const otherArticles = articleContent.filter(article => article.name !== name);


    return(
  <div id="blog-body">
<NavBlog />
    <h1>{article.title}</h1>
    <UpvotesSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo} />
    <br/>
    {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
    ))}
    <CommentsList comments={articleInfo.comments} />
    <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
    <hr style={{borderTop: "2px solid black"}}/>
    <h3 style={{color: "red"}}>Other articles:</h3>
    <ArticlesList articles={otherArticles} />
    
  </div>
);
    }

export default ArticlePage;