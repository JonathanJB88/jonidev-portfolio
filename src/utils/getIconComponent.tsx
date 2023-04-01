import * as SiIcons from 'react-icons/si';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
import { DiScrum } from 'react-icons/di';
import { BiGitBranch } from 'react-icons/bi';
import { RiComputerLine } from 'react-icons/ri';
import { GiThink } from 'react-icons/gi';
import { IconType } from 'react-icons';

type iconMapType = {
  [key: string]: IconType;
};

export const getIconComponent = (skillName: string): IconType => {
  const iconMap: iconMapType = {
    TypeScript: SiIcons.SiTypescript,
    'React.js': FaIcons.FaReact,
    'React Native': FaIcons.FaMobileAlt,
    Redux: SiIcons.SiRedux,
    'Next.js': SiIcons.SiNextdotjs,
    Cypress: SiIcons.SiCypress,
    Jest: SiIcons.SiJest,
    'Tailwind CSS': SiIcons.SiTailwindcss,
    ChakraUI: SiIcons.SiChakraui,
    MaterialUI: SiIcons.SiMaterialdesign,
    'Node.js': IoIcons.IoLogoNodejs,
    'Git & GitHub': BiGitBranch,
    'Express.js': SiIcons.SiExpress,
    MongoDB: SiIcons.SiMongodb,
    PostgreSQL: SiIcons.SiPostgresql,
    Scrum: DiScrum,
    JavaScript: IoIcons.IoLogoJavascript,
    Communication: IoIcons.IoIosChatboxes,
    Teamwork: AiIcons.AiOutlineTeam,
    Leadership: MdIcons.MdOutlineLeaderboard,
    'Problem Solving': GiThink,
    Spanish: MdIcons.MdLanguage,
    English: MdIcons.MdLanguage,
    Italian: MdIcons.MdLanguage,
  };

  return iconMap[skillName] ?? RiComputerLine;
};
