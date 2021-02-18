import React, {useState, useEffect} from 'react';
import {blogService} from "../../../services";
import {NavLink} from "react-router-dom";
import { Button } from '@material-ui/core';
import ArticleCard from "../../../components/blog/ArticleCard";

const BlogArticles = () => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    setLoading(true)
    blogService.getArticles().then(
      res => setArticles(res)
    ).finally(() => setLoading(false))
  },[])

  const deleteArticle = (index) => {
    const newArticles = [...articles];
    newArticles.splice(index -1, 1);
    setArticles(newArticles);
  };

  return (
    <div>
      {!loading && (
        <div>
          {
            articles.map(a => {
              return (
                <div>
                <NavLink key={a.id} to={{
                  pathname:`/blog/${a.id}`,
                  state: {
                    article: a
                  }
                }}>
                  <ArticleCard description={a.title} title={a.description}/>
                </NavLink>
                {}
                <Button color="secondary" onClick={() => deleteArticle(a.id)}>
                  Delete
                </Button>
              </div>
              )
            })
          }
        </div>
      )}
    </div>
  );
};

export default BlogArticles;