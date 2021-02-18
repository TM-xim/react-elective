import React from 'react';
import {NavLink, Redirect, Route, Switch} from "react-router-dom";
import SettingsProfile from "./settings/SettingsProfile";
import { Typography } from '@material-ui/core';
import BlogArticles from "./blog/BlogArticles";
import BlogArticle from "./blog/BlogArticle";

const BlogPage = () => {
  return (
    <div>
      <Typography variant="h1">Blog page</Typography>
      <Switch>
        <Route exact path="/blog" component={BlogArticles}/>
        <Route path="/blog/:id" component={BlogArticle}/>
      </Switch>
    </div>
  );
};

export default BlogPage;