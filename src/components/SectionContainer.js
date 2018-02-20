import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignContent: 'flex-start',
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
