import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import profileImg from '../images/profile.jpg';
import { desktop, print } from '../utils/mediaQuery';

const styles = {
  profile: {
    width: '100%',
    height: '80vh',
    marginBottom: 32,
    backgroundImage: `url(${profileImg})`,
    backgroundSize: 'cover',

    [desktop]: {
      position: 'fixed',
      top: 0,
      bottom: 0,
      right: 0,
      width: '38%',
      height: 'auto',
      marginBottom: 0,
    },

    [print]: {
      display: 'none',
    },
  },
};

const Profile = ({ classes }) => <aside className={classes.profile} />;

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectSheet(styles)(Profile);
