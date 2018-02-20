import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import { tablet, print } from '../utils/mediaQuery';

const styles = {
  section: {
    color: 'white',
    width: '100%',
    padding: 30,
    fontSize: 16,
    lineHeight: '24px',
    fontWeight: 200,

    [tablet]: {
      width: ({ screenWide }) => (screenWide ? '100%' : '50%'),
    },

    [print]: {
      color: 'black',
      width: ({ printWide }) => (printWide ? '100%' : '50%'),
    },
  },
};

const Section = ({ title, children, classes }) => (
  <section className={classes.section}>
    <h2>{title}</h2>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  printWide: PropTypes.bool,
  screenWide: PropTypes.bool,
  children: PropTypes.any.isRequired,
  classes: PropTypes.object.isRequired,
};

Section.defaultProps = {
  printWide: false,
  screenWide: false,
};

export default injectSheet(styles)(Section);
