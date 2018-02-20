import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { print } from '../utils/mediaQuery';

const styles = {
  footer: {
    background: 'black',
    padding: 64,
    fontSize: '60%',
    color: '#666',
    '& a': {
      color: '#aaa',
    },

    [print]: {
      display: 'none',
    },
  },
};

const Footer = ({ classes }) => (
  <footer className={classes.footer}>
    This CV is created by Ilkka Hänninen with React. Background image by{' '}
    <a href="https://unsplash.com/photos/RsBPSSftZEA">Stephen Pedersen</a>.
    Profile image by Tomi Rajala.
  </footer>
);

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectSheet(styles)(Footer);
