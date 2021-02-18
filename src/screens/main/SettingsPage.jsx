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
        <NavLink to={"/settings/profile"}>{activeUser.email}</NavLink>
      </div>
      <Switch>
        <Route exact path="/settings" render={() => (<Redirect to={"/settings/profile"} />)}/>
        <Route path="/settings/profile" component={SettingsProfile}/>
        <Route path="/settings/subscription" component={SettingsSubscription}/>
      </Switch>
    </div>
  );
};

export default SettingsPage;