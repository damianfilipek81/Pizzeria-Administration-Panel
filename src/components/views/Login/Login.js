import React from 'react';
import styles from './Login.module.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <div className={styles.component}>
      <form className={styles.login}>
        <h4>Login</h4>
        <TextField id="standard-basic" label="Login" />
        <TextField id="standard-basic" label="Password" />
        <Button variant="outlined" component={Link} to={`/`}>Login</Button>
      </form>
    </div>
  );
};

export default Login;