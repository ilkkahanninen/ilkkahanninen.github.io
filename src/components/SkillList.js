import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import Section from './Section';
import { selectSkillsByTag } from '../store/skills';
import { print } from '../utils/mediaQuery';

const splitRegex = /(.+)(\(.+\))/;
const splitTitle = title => {
  const match = title.match(splitRegex);
  return match ? [match[1], match[2]] : [title];
};

const styles = {
  smallPrint: {
    fontSize: '60%',
    color: 'rgba(255, 255, 255, 0.5)',
    verticalAlign: 'text-top',
  },

  expert: {
    background: '#fc0',
    color: 'black',
    marginLeft: 7,
    fontSize: '60%',
    borderRadius: 6,
    paddingLeft: 4,
    paddingRight: 4,
    verticalAlign: 'text-top',
  },

  [print]: {
    skills: {
      fontSize: '80%',
    },

    smallPrint: {
      fontSize: '80%',
      color: 'black',
      verticalAlign: 'baseline',
    },

    expert: {
      fontSize: '80%',
      color: '#ccc',
      background: 'none',
      verticalAlign: 'baseline',
      textTransform: 'uppercase',
    },
  },
};

const SkillList = ({ title, tag, skills, classes }) => (
  <Section title={title}>
    <ul className={classes.skills}>
      {selectSkillsByTag(tag)(skills).map(({ title, isExpert }) => {
        const [primaryTitle, extraInfo] = splitTitle(title);
        return (
          <li key={title}>
            {primaryTitle}
            {extraInfo && (
              <span className={classes.smallPrint}>{extraInfo}</span>
            )}
            {isExpert && <span className={classes.expert}>Expert</span>}
          </li>
        );
      })}
    </ul>
  </Section>
);

SkillList.propTypes = {
  title: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      isExpert: PropTypes.bool.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  ).isRequired,
  classes: PropTypes.object.isRequired,
};

export default injectSheet(styles)(SkillList);
