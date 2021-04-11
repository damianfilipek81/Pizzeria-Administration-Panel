import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './PageNav.module.scss';
import Button from '@material-ui/core/Button';

const PageNav = () => {
  return (
    <nav className={styles.component}>
      <Button className={styles.link} component={NavLink} exact to={`/`} activeClassName='active'>Home</Button>
      <Button className={styles.link} component={NavLink} to={`/kitchen`} activeClassName='active'>Kitchen</Button>
      <Button className={styles.link} component={NavLink} to={`/tables`} activeClassName='active'>Tables</Button>
      <Button className={styles.link} component={NavLink} to={`/login`} activeClassName='active'>Login</Button>
      <Button className={styles.link} component={NavLink} to={`/waiter`} activeClassName='active'>Waiter</Button>
    </nav>
  );
};

export default PageNav;