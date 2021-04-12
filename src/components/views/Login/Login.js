import React from 'react';
import styles from './Login.module.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <div className={styles.component}>
      <form className={styles.login}>
        <h2>Sign in</h2>
        <TextField id="standard-basic" variant="outlined" label="Login" />
        <TextField id="standard-basic" variant="outlined" label="Password" />
        <Button variant="contained" color="primary" component={Link} to={`/`} >Login</Button>
      </form>
    </div>
  );
};

export default Login;