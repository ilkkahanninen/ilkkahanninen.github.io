import { pipe, prop, filter, sortWith, ascend } from 'ramda';

export const TAG_FRONTEND = 'frontend';
export const TAG_BACKEND = 'backend';
export const TAG_TOOLS = 'tool';
export const TAG_MOBILE = 'mobile';
export const TAG_PROGRAMMING_LANGUAGE = 'programmingLanguage';
export const TAG_HOBBY = 'hobby';

export const LEVEL_EXPERT = 1;
export const LEVEL_GOOD = 2;
export const LEVEL_BASICS = 2;

const skill = (title, level, ...tags) => ({
  title,
  tags,
  order: level,
  isExpert: level === LEVEL_EXPERT,
});

export default {
  state: {
    list: [
      // Front end skills
      skill('React', LEVEL_EXPERT, TAG_FRONTEND),
      skill('HTML5', LEVEL_EXPERT, TAG_FRONTEND),
      skill(
        'Stylesheets (CSS, SASS, LESS, Stylus, PostCSS, JSS)',
        LEVEL_EXPERT,
        TAG_FRONTEND,
      ),
      skill('AngularJS', LEVEL_BASICS, TAG_FRONTEND),
      skill('Redux', LEVEL_EXPERT, TAG_FRONTEND),
      skill('React Router', LEVEL_GOOD, TAG_FRONTEND),

      // Back end skills
      skill('Node.js', LEVEL_GOOD, TAG_BACKEND),
      skill('Express', LEVEL_GOOD, TAG_BACKEND),
      skill(
        'AWS (S3, CloudFront, Lambda, API Gateway)',
        LEVEL_BASICS,
        TAG_BACKEND,
      ),
      skill('MySQL / MariaDB', LEVEL_BASICS, TAG_BACKEND),
      skill('MongoDB', LEVEL_BASICS, TAG_BACKEND),
      skill('Cumulocity', LEVEL_EXPERT, TAG_BACKEND),
      skill(
        'Azure (IoT Hub, Stream Analytics, Blob Storage, DocumentDB)',
        LEVEL_BASICS,
        TAG_BACKEND,
      ),
      skill('Redis', LEVEL_BASICS, TAG_BACKEND),
      skill('REST', LEVEL_GOOD, TAG_BACKEND),

      // Mobile
      skill('Cordova / PhoneGap', LEVEL_GOOD, TAG_MOBILE, TAG_TOOLS),

      // Tools
      skill('ESLint', LEVEL_GOOD, TAG_TOOLS),
      skill('Git (Bitbucket, GitHub, GitFlow)', LEVEL_GOOD, TAG_TOOLS),
      skill('Gulp, npm scripts', LEVEL_GOOD, TAG_TOOLS),
      skill('Unit testing (Mocha, Jasmine, Jest, Tape)', LEVEL_GOOD, TAG_TOOLS),
      skill('Webpack', LEVEL_GOOD, TAG_TOOLS, TAG_FRONTEND),
      skill('Babel', LEVEL_GOOD, TAG_TOOLS, TAG_FRONTEND),
      skill('Visual Studio Code', LEVEL_GOOD, TAG_TOOLS),

      // Programming languages
      skill(
        'Javascript / ES8+',
        LEVEL_EXPERT,
        TAG_FRONTEND,
        TAG_BACKEND,
        TAG_PROGRAMMING_LANGUAGE,
      ),
      skill('C/C++', LEVEL_GOOD, TAG_PROGRAMMING_LANGUAGE),
      skill('C# + .NET', LEVEL_BASICS, TAG_PROGRAMMING_LANGUAGE),
      skill('PHP', LEVEL_GOOD, TAG_PROGRAMMING_LANGUAGE, TAG_BACKEND),

      // Hobbies
      skill('Demoscene (a little lazy lately)', LEVEL_GOOD, TAG_HOBBY),
      skill('Cooking (vegetarian nowadays)', LEVEL_GOOD, TAG_HOBBY),
      skill('Music (producing and listening)', LEVEL_GOOD, TAG_HOBBY),
    ],
  },
};

export const selectSkillsByTag = tag =>
  pipe(
    filter(skill => skill.tags.includes(tag)),
    sortWith([ascend(prop('order')), ascend(prop('title'))]),
  );
