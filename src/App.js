import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Showroom from "./pages/Showroom";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import NotFoundPage from "./pages/NotFoundPage";
import VideosPage from "./pages/VideosPage";

import Blog from "./pages/Blog_n";
import BlogAbout from "./components/blog/pages/AboutPage";
import BlogArticlesListPage from "./components/blog/pages/ArticlesListPage";
import BlogArticlePage from "./components/blog/pages/ArticlePage";

import Navigation from "./components/Navigation";
import UpButton from "./components/UpButton";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";
import "./Blog.css";
import 'react-modal-video/scss/modal-video.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <div id="page-body">
          <Navigation />
          <Switch>
          <ScrollToTop>
            <Route path="/my-portfolio/" component={HomePage} exact />
            <Route path="/my-portfolio/about" component={AboutPage} exact />
            <Route path="/my-portfolio/showroom" component={Showroom} exact />
            <Route path="/my-portfolio/contact" component={Contact} exact />
            <Route path="/my-portfolio/videos" component={VideosPage} exact />
            
            {/* BLOG CONTENT */}
            <Route path="/my-portfolio/blog" component={Blog} exact />
            <Route path="/my-portfolio/blog/blog-about" component={BlogAbout} />
            <Route path="/my-portfolio/blog/articles-list" component={BlogArticlesListPage} />
            <Route path="/my-portfolio/blog/article/:name" component={BlogArticlePage} />
            {/* BLOG CONTENT */}
            </ScrollToTop>

            <Route component={NotFoundPage} />
          </Switch>
          <UpButton />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
