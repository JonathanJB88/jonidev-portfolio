import { getIconComponent } from '@/utils';
import * as SiIcons from 'react-icons/si';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
import { DiScrum } from 'react-icons/di';
import { BiGitBranch } from 'react-icons/bi';
import { RiComputerLine } from 'react-icons/ri';
import { GiThink } from 'react-icons/gi';

const skillNames = [
  'TypeScript',
  'React.js',
  'React Native',
  'Redux',
  'Next.js',
  'Cypress',
  'Jest',
  'Tailwind CSS',
  'ChakraUI',
  'MaterialUI',
  'Node.js',
  'Git & GitHub',
  'Express.js',
  'MongoDB',
  'PostgreSQL',
  'Scrum',
  'JavaScript',
  'Communication',
  'Teamwork',
  'Leadership',
  'Problem Solving',
  'Spanish',
  'English',
  'Italian',
];

const expectedIcons = [
  SiIcons.SiTypescript,
  FaIcons.FaReact,
  FaIcons.FaMobileAlt,
  SiIcons.SiRedux,
  SiIcons.SiNextdotjs,
  SiIcons.SiCypress,
  SiIcons.SiJest,
  SiIcons.SiTailwindcss,
  SiIcons.SiChakraui,
  SiIcons.SiMaterialdesign,
  IoIcons.IoLogoNodejs,
  BiGitBranch,
  SiIcons.SiExpress,
  SiIcons.SiMongodb,
  SiIcons.SiPostgresql,
  DiScrum,
  IoIcons.IoLogoJavascript,
  IoIcons.IoIosChatboxes,
  AiIcons.AiOutlineTeam,
  MdIcons.MdOutlineLeaderboard,
  GiThink,
  MdIcons.MdLanguage,
  MdIcons.MdLanguage,
  MdIcons.MdLanguage,
];

const unknownSkillNames = ['Unknown', 'Another Unknown'];

describe('getIconComponent', () => {
  it('should return the correct Icon component for skill names', () => {
    skillNames.forEach((skillName, index) => {
      expect(getIconComponent(skillName)).toBe(expectedIcons[index]);
    });
  });

  it('should return the RiComputerLine icon component for unknown skill names', () => {
    unknownSkillNames.forEach((skillName) => {
      expect(getIconComponent(skillName)).toBe(RiComputerLine);
    });
  });
});
