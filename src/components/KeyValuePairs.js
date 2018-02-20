import React, { Fragment } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import Section from './Section';
import { print } from '../utils/mediaQuery';

const styles = {
  keyValues: {
    width: '100%',
    '& td, & th': {
      padding: 5,
      borderBottom: '1px solid #222',
    },
    '& th': {
      color: '#fc0',
      fontSize: '80%',
      textAlign: 'left',
    },
    '& tr:last-child': {
      '& td, & th': {
        border: 'none',
      },
    },
    [print]: {
      '& td, & th': {
        padding: 2,
        borderColor: '#eee',
        fontWeight: 600,
        fontSize: '80%',
      },
      '& th': {
        color: 'black',
        fontWeight: 200,
      },
    },
  },
  info: {
    fontSize: '80%',
    padding: '15px!important',

    [print]: {
      paddingLeft: '64px!important',
      fontWeight: '200!important',
    },
  },
};

const KeyValuePairs = ({ title, data, asLinks, classes, ...rest }) => (
  <Section title={title} {...rest}>
    <table className={classes.keyValues}>
      <tbody>
        {data.map(({ key, value, info }) => (
          <Fragment key={key}>
            <tr>
              <th>{key}</th>
              <td>{asLinks ? <a href={value}>{value}</a> : value}</td>
            </tr>
            {info && (
              <tr>
                <td colSpan="2" className={classes.info}>
                  {info}
                </td>
              </tr>
            )}
          </Fragment>
        ))}
      </tbody>
    </table>
  </Section>
);

KeyValuePairs.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      value: PropTypes.any,
      info: PropTypes.string,
    }),
  ).isRequired,
  asLinks: PropTypes.bool,
  classes: PropTypes.object.isRequired,
};

export default injectSheet(styles)(KeyValuePairs);
