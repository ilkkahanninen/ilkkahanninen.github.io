import React, { Fragment } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import { desktop, print } from '../utils/mediaQuery';

const styles = {
  heading: {
    color: '#fff',
    padding: 30,
    paddingBottom: 15,
    fontSize: 32,
    fontWeight: 200,

    [desktop]: {
      marginTop: 32,
      fontSize: 64,
    },

    [print]: {
      color: 'black',
    },
  },
  primaryText: {
    fontWeight: 600,
    marginRight: 10,
  },
  updated: {
    paddingLeft: 30,
    marginBottom: 15,
    color: 'rgba(255, 255, 255, 0.5)',
    fontWeight: 200,

    [print]: {
      color: '#888',
    },
  },
};

const Heading = ({ primaryText, secondaryText, classes }) => (
  <Fragment>
    <h1 className={classes.heading}>
      {primaryText && (
        <span className={classes.primaryText}>{primaryText}</span>
      )}
      {secondaryText && (
        <span className={classes.secondary}>{secondaryText}</span>
      )}
    </h1>
    <div className={classes.updated}>Updated: 20.2.2018</div>
  </Fragment>
);

Heading.propTypes = {
  primaryText: PropTypes.string,
  secondaryText: PropTypes.string,
  classes: PropTypes.object.isRequired,
};

export default injectSheet(styles)(Heading);
