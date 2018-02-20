import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import { desktop } from '../utils/mediaQuery';

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignContent: 'flex-start',

    [desktop]: {
      width: '64%',
    },
  },
};

const SectionContainer = ({ children, classes }) => (
  <article className={classes.container}>{children}</article>
);

SectionContainer.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.object.isRequired,
};

export default injectSheet(styles)(SectionContainer);
