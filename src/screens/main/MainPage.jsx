import React from 'react';
import { Typography } from '@material-ui/core';

const MainPage = () => {
  const user = localStorage.getItem("activeUser");
  return (
    <div>
      <Typography variant="h1">Main page</Typography>
    </div>
  );
};

export default MainPage;