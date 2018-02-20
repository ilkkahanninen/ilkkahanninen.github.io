import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from './store';
import Heading from './components/Heading';
import SectionContainer from './components/SectionContainer';
import SkillList from './components/SkillList';
import Profile from './components/Profile';
import KeyValuePairs from './components/KeyValuePairs';
import Footer from './components/Footer';

import {
  TAG_BACKEND,
  TAG_FRONTEND,
  TAG_TOOLS,
  TAG_PROGRAMMING_LANGUAGE,
} from './store/skills';

export class CV extends Component {
  render() {
    const { skills, info, workHistory, links } = this.props;
    return (
      <article>
        <Heading primaryText="CV" secondaryText="→ Ilkka Hänninen" />
        <Profile />
        <SectionContainer>
          <KeyValuePairs title="Info" data={info} printWide screenWide />
          <SkillList title="Front end" tag={TAG_FRONTEND} skills={skills} />
          <SkillList title="Back end" tag={TAG_BACKEND} skills={skills} />
          <SkillList title="Dev tools" tag={TAG_TOOLS} skills={skills} />
          <SkillList
            title="Languages"
            tag={TAG_PROGRAMMING_LANGUAGE}
            skills={skills}
          />
          <KeyValuePairs
            title="Work history"
            data={workHistory}
            screenWide
            printWide
          />
          <KeyValuePairs
            title="Links and references"
            data={links}
            asLinks
            screenWide
            printWide
          />
        </SectionContainer>
        <Footer />
      </article>
    );
  }
}

CV.propTypes = {
  skills: PropTypes.array.isRequired,
  info: PropTypes.array.isRequired,
  workHistory: PropTypes.array.isRequired,
  links: PropTypes.array.isRequired,
};

export default connect(state => ({
  skills: state.cv.skills.list,
  info: state.cv.info,
  workHistory: state.cv.workHistory,
  links: state.cv.links,
}))(CV);
