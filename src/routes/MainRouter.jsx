import React from 'react';
import {NavLink, Redirect, Switch, Route} from 'react-router-dom'
import {userService} from "../services";
import { Button, Typography } from '@material-ui/core';
import MainPage from "../screens/main/MainPage";
import BlogPage from "../screens/main/BlogPage";
import SettingsPage from "../screens/main/SettingsPage";

const MainRouter = () => {
  if(!userService.isLogged){
    return (
      <Redirect to={"/auth"} />
    )
  }

  const activeUser = JSON.parse(localStorage.getItem("activeUser"));

  return (
    <div>
      <header>
        <Button><NavLink to={"/"}>Main Page</NavLink></Button>
        <Button><NavLink to={"/blog"}>Blog</NavLink></Button>
        <Button><NavLink to={"/settings"}>Settings</NavLink></Button>
      </header>
      <Typography variant="h6">{activeUser.email}</Typography>
      <Switch>
        <Route exact path={"/"} component={MainPage}/>
        <Route path={"/blog"} component={BlogPage}/>
        <Route path={"/settings"} component={SettingsPage}/>
        <Route path={"*"} render={() => <Redirect to={"/404"}/>}/>
      </Switch>
    </div>
  );
};

export default MainRouter;