import React from 'react';
import {Switch, Route, Redirect, NavLink} from "react-router-dom";
import { Typography } from '@material-ui/core';
import SettingsProfile from "./settings/SettingsProfile";
import SettingsSubscription from "./settings/SettingsSubscription";

const SettingsPage = () => {

  const activeUser = JSON.parse(localStorage.getItem("activeUser"));
  console.log(activeUser.email)

  return (
    <div>
      <Typography variant="h1">Settings page</Typography>
      <div>
        <Typography variant="h6">Email : {activeUser.email}</Typography>
        <Typography variant="h6">Password : {activeUser.password}</Typography>
      </div>
    </div>
  );
};

export default SettingsPage;