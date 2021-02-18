import React from 'react';
import {Switch, Route, Redirect, NavLink} from "react-router-dom";
import { Typography } from '@material-ui/core';
import SettingsProfile from "./settings/SettingsProfile";
import SettingsSubscription from "./settings/SettingsSubscription";

const SettingsPage = (onSubmit) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function onEdit({email, password}){
    userService.login({email, password}).then(
      () => history.push('/')
    )
  }

  const activeUser = JSON.parse(localStorage.getItem("activeUser"));
  console.log(activeUser.email)

  return (
    <div>
      <Typography variant="h1">Settings page</Typography>
      <div>
        <Typography variant="h6">{activeUser.email}</Typography>
        <Typography variant="h6">{activeUser.password}</Typography>
        <div>
          <AuthForm onSubmit={onEdit}/>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;