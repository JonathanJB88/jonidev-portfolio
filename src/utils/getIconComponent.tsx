import {
  SiChakraui,
  SiCypress,
  SiJest,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiMaterialdesign,
  SiExpress,
  SiMongodb,
  SiPostgresql,
} from 'react-icons/si';
import { FaChalkboardTeacher, FaMobileAlt, FaReact, FaServer } from 'react-icons/fa';
import { IoLogoNodejs, IoLogoJavascript, IoIosChatboxes } from 'react-icons/io';
import { BiGitBranch, BiTestTube } from 'react-icons/bi';
import { DiScrum } from 'react-icons/di';
import { AiOutlineTeam } from 'react-icons/ai';
import { MdOutlineLeaderboard, MdLanguage, MdDeveloperMode } from 'react-icons/md';
import { RiComputerLine } from 'react-icons/ri';
import { GiThink } from 'react-icons/gi';
import { IconType } from 'react-icons';

type iconMapType = {
  [key: string]: IconType;
};

export const getIconComponent = (skillName: string): IconType => {
  const iconMap: iconMapType = {
    TypeScript: SiTypescript,
    'React.js': FaReact,
    'React Native': FaMobileAlt,
    'Redux & Redux Toolkit': SiRedux,
    'Next.js': SiNextdotjs,
    Cypress: SiCypress,
    Jest: SiJest,
    'Tailwind CSS': SiTailwindcss,
    ChakraUI: SiChakraui,
    MaterialUI: SiMaterialdesign,
    'Node.js': IoLogoNodejs,
    'Git & GitHub': BiGitBranch,
    'Express.js': SiExpress,
    MongoDB: SiMongodb,
    PostgreSQL: SiPostgresql,
    Scrum: DiScrum,
    JavaScript: IoLogoJavascript,
    Communication: IoIosChatboxes,
    Teamwork: AiOutlineTeam,
    Leadership: MdOutlineLeaderboard,
    'Problem Solving': GiThink,
    Spanish: MdLanguage,
    English: MdLanguage,
    Italian: MdLanguage,
  };
  if (!iconMap[skillName]) return RiComputerLine;
  return iconMap[skillName];
};
