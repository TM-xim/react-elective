import React, {useState} from 'react';
import PropTypes from "prop-types";
import { Button, TextField, Typography } from '@material-ui/core';

const AuthForm = ({onSubmit}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function onSubmitForm(e){
    e.preventDefault()
    onSubmit({
      email,
      password
    })
  }

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <Typography variant="h6" color="primary">Login</Typography>
        <TextField placeholder="Email" name="Login" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/><br/><br/>
        <TextField name="Password" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/><br/><br/>
        <Button type="submit" variant="contained" color="primary">Login</Button>
      </form>
      <br/><br/><br/><br/>
      <form onSubmit={onSubmitForm}>
        <Typography variant="h6" color="secondary">Sign up</Typography>
        <TextField placeholder="Email" name="Login" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/><br/><br/>
        <TextField name="Password" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/><br/><br/>
        <Button type="submit" variant="contained" color="secondary">Sign up</Button>
      </form>
    </div>
  );
};

export default AuthForm;


AuthForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}