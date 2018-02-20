import skills from './skills';

const row = (key, value, info) => ({ key, value, info });

export default {
  children: { skills },
  state: {
    info: [
      row('Name', 'Ilkka Hänninen'),
      row('Occupation', 'Full stack software developer'),
      row('Date of birth', '23.3.1983'),
      row('Languages', 'Finnish (native), English (fluent)'),
      row('Current employer', 'Livion @ Kokkola, Finland'),
      row('Email', 'ilkka.hanninen@gmail.com'),
    ],
    workHistory: [
      row(
        'Livion Oy',
        '08/2011 – present',
        `Single page applications with React and Angular; Back end development
        with Node.js; IoT agents, micro services and design; Front end
        prototyping; Mobile app development with Cordova`,
      ),
      row(
        'SESCA Technologies / Neusoft',
        '05/2005 – 07/2011',
        `Symbian and Qt development, custom UI development, driver implementation,
        software architecture design and UI/UX design.`,
      ),
    ],
    links: [
      row('LinkedIn', 'https://www.linkedin.com/in/ilkkah/'),
      row('GitHub', 'https://github.com/ilkkahanninen'),
      row('Project: Dwindler', 'https://github.com/dwindler/dwindler'),
      row('Project: Jean Nine artist page', 'http://jean9.net'),
      row('Project: This CV', 'https://ilkkahanninen.github.io'),
    ],
  },
};
