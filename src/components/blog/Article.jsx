import React from 'react';
import { Typography } from '@material-ui/core';
import PropTypes from "prop-types";

const ArticleCard = ({title, description, content}) => {
  return (
    <div>
     <Typography variant="h3">{title}</Typography>
     <Typography variant="h6">{description}</Typography>
     <Typography variant="body1">{content}</Typography>
    </div>
  );
};

export default ArticleCard;


ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}