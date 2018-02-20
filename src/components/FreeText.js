import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Section from './Section';
import { print } from '../utils/mediaQuery';

const styles = {
  text: {
    [print]: {
      fontSize: '80%',
    },
  },
};

const FreeText = ({ title, children, classes }) => (
  <Section title={title} printWide>
    <div className={classes.text}>{children}</div>
  </Section>
);

FreeText.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
  classes: PropTypes.object.isRequired,
};

export default injectSheet(styles)(FreeText);
