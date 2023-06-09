import { ISkill, IProject, IService, IJourney, Category } from '@/interfaces';

export const about: string = `I'm Jonathan Bracho, a Frontend Developer proficient in React, Typescript, Next.js, and Node.js. With a unique background in education and business, I excel in strategic planning, teamwork, and communication. Driven by curiosity, I'm always eager to enhance my skills and create innovative web solutions that spark your interest.`;

export const techSkills: ISkill[] = [
  {
    name: 'TypeScript',
    level: '87%',
  },
  {
    name: 'React.js',
    level: '89%',
  },
  {
    name: 'React Native',
    level: '85%',
  },
  {
    name: 'Redux',
    level: '92%',
  },
  {
    name: 'Next.js',
    level: '89%',
  },
  {
    name: 'Cypress',
    level: '85%',
  },
  {
    name: 'Jest',
    level: '82%',
  },
  {
    name: 'Tailwind CSS',
    level: '82%',
  },
  {
    name: 'ChakraUI',
    level: '77%',
  },
  {
    name: 'MaterialUI',
    level: '50%',
  },
  {
    name: 'Node.js',
    level: '93%',
  },
  {
    name: 'Git & GitHub',
    level: '95%',
  },
  {
    name: 'Express.js',
    level: '90%',
  },
  {
    name: 'MongoDB',
    level: '91%',
  },
  {
    name: 'PostgreSQL',
    level: '75%',
  },
  {
    name: 'Scrum',
    level: '90%',
  },
  {
    name: 'JavaScript',
    level: '95%',
  },
];

export const softSkills: ISkill[] = [
  {
    name: 'Communication',
    level: '100%',
  },
  {
    name: 'Teamwork',
    level: '100%',
  },
  {
    name: 'Leadership',
    level: '95%',
  },
  {
    name: 'Problem Solving',
    level: '100%',
  },
  {
    name: 'Spanish',
    level: '100%',
  },
  {
    name: 'English',
    level: '95%',
  },
  {
    name: 'Italian',
    level: '55%',
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: 'Física Fácil',
    description:
      'Física Fácil is a web app for solving physics problems using AI. Built with React, TypeScript, and TailwindCSS, it offers a user-friendly interface, supports various education levels, and is responsive across devices, making physics learning accessible and engaging for all students. 🎓💡',
    image_path: 'easyphysics.png',
    deployed_url: 'https://fisicafacil.vercel.app/',
    github_url: 'https://github.com/JonathanJB88/AIEasyPhysics',
    category: ['TypeScript', 'React', 'TailwindCSS'],
    key_techs: ['React', 'Typescript', 'TailwindCSS', 'Framer Motion', 'React-hot-toast'],
  },
  {
    id: 2,
    name: 'Portfolio',
    description:
      'Portfolio web page developed with Next.js and TailwindCSS. It includes my resume, skills and projects.',
    image_path: 'portfolio.png',
    deployed_url: 'https://jonathanbrachoportfolio.vercel.app/',
    github_url: 'https://github.com/JonathanJB88/portfolio',
    category: ['TypeScript', 'React', 'Next', 'TailwindCSS'],
    key_techs: ['React', 'Next', 'TailwindCSS', 'Framer Motion', 'React Icons'],
  },
  {
    id: 3,
    name: 'My Custom Hooks',
    description: 'React + Typescript were used to create my custom hooks.',
    image_path: 'customhooks.png',
    deployed_url: 'https://github.com/JonathanJB88/My-Custom-Hooks_Typescript',
    github_url: 'https://github.com/JonathanJB88/My-Custom-Hooks_Typescript',
    category: ['TypeScript', 'React'],
    key_techs: ['React', 'TypeScript', 'Vite'],
  },
  {
    id: 4,
    name: 'Maps App',
    description: 'To improve my knowledge of React and Typescript, I developed this map application.',
    image_path: 'mapsapp.png',
    deployed_url: 'https://jonathandev-mapsapp.netlify.app/',
    github_url: 'https://github.com/JonathanJB88/Maps-App',
    category: ['TypeScript', 'React'],
    key_techs: ['React', 'TypeScript', 'Vite', 'Jest', 'CSS3', 'Mapbox', 'React Testing Library'],
  },
  {
    id: 5,
    name: 'Calendar App',
    description: `This React-based calendar application was created. The project's goal is to improve the front-end developer's React expertise.`,
    image_path: 'calendarapp.png',
    deployed_url: 'https://jonathandev-calendar-app.netlify.app/',
    github_url: 'https://github.com/JonathanJB88/CalendarApp_Frontend-React',
    category: ['JavaScript', 'React'],
    key_techs: ['React', 'JavaScript', 'Vite', 'Jest', 'CSS3', 'React Testing Library'],
  },
  {
    id: 6,
    name: 'jon-productcard-component',
    description:
      'Providing reusable components for the open-source community, like this one made with TypeScript and React.',
    image_path: 'productcard.png',
    deployed_url: 'https://www.npmjs.com/package/jon-productcard-component',
    github_url: 'https://github.com/JonathanJB88/jon-productcard-component',
    category: ['TypeScript', 'React'],
    key_techs: ['React', 'TypeScript', 'CSS3'],
  },
  {
    id: 7,
    name: 'Pokemon App',
    description:
      'Design and develop a Pokemon App that included: searching, filtering, sorting, creating and updating Pokemons.',
    image_path: 'pokemon.png',
    deployed_url: 'https://pokemon-app-by-jonathanbracho.vercel.app/',
    github_url: 'https://github.com/JonathanJB88/PI-Pokemon',
    category: ['JavaScript', 'React'],
    key_techs: ['React', 'Redux', 'CSS3', 'Node.js', 'Express', 'PostgreSQL'],
  },
  {
    id: 8,
    name: 'World Travelers',
    description:
      'SPA where users can filter, sort, search, create and join other trips, pay through paypal or web3, comment on tourist activities and chat with other users. Admin users can create tourist activities in destination cities previously added.',
    image_path: 'worldtravelers.png',
    deployed_url: 'https://world-travelers-production.up.railway.app/',
    github_url: 'https://github.com/AngelPM9506/PF-SoyHenry',
    category: ['TypeScript', 'React', 'Next', 'ChakraUI'],
    key_techs: [
      'Postgress',
      'MongoDB',
      'Socket.io',
      'Nodemailer',
      'Auth0',
      'Cloudinary',
      'ChakraUI',
      'ReactQuery',
      'Leaflet',
      'Rainbowkit',
      'Wagmi',
      'Ethers.js',
    ],
  },
  {
    id: 9,
    name: 'Calculator App',
    description: 'Simple Calculator App developed with React Native + Typescript, for iOS and Android',
    image_path: 'calculator.png',
    deployed_url: 'https://drive.google.com/file/d/1pRb-u9kmI1Hn7l_912FhVt3tLHUleJJr/view',
    github_url: 'https://github.com/JonathanJB88/Calculator-ReactNative',
    category: ['TypeScript', 'React Native'],
    key_techs: ['React Native', 'TypeScript'],
  },
  {
    id: 10,
    name: 'Movies App',
    description: 'Movies App developed with React Native + Typescript, for iOS and Android.',
    image_path: 'movies.png',
    deployed_url: 'https://drive.google.com/file/d/1s3o437uFC_lKef53EPjyLEwKSM96kxrO/view',
    github_url: 'https://github.com/JonathanJB88/MoviesApp-reactNative',
    category: ['TypeScript', 'React Native'],
    key_techs: ['React Native', 'TypeScript'],
  },
  {
    id: 11,
    name: 'Pokedex App',
    description:
      'Pokedex App developed with React Native + Typescript, for iOS and Android. Details and search by name or id is available.',
    image_path: 'pokedex.png',
    deployed_url: 'https://drive.google.com/file/d/19U2myC_swNI4gOiS67__Ih96P3FCRRdW/view',
    github_url: 'https://github.com/JonathanJB88/PokedexApp',
    category: ['TypeScript', 'React Native'],
    key_techs: ['React Native', 'TypeScript'],
  },
  {
    id: 12,
    name: 'Routes App',
    description: 'Routes App developed with React Native + Typescript, for iOS and Android.',
    image_path: 'routes.png',
    deployed_url: 'https://drive.google.com/file/d/1phkcH9OlQdZ6bfwIZq2_MkPwMVj-08TI/view',
    github_url: 'https://github.com/JonathanJB88/MapsApp-ReactNative',
    category: ['TypeScript', 'React Native'],
    key_techs: ['React Native', 'TypeScript'],
  },
  {
    id: 13,
    name: 'Products App',
    description:
      'Products App developed with React Native + Typescript, for iOS and Android. Functionalities: User login and register, add and delete products (only admin user), access to camera and gallery to add product pictures.',
    image_path: 'products.png',
    deployed_url: 'https://drive.google.com/file/d/1YUeCUpUja6gz1W6sbVjlfxH3_18_HDtf/view',
    github_url: 'https://github.com/JonathanJB88/ProductsApp',
    category: ['TypeScript', 'React Native'],
    key_techs: ['React Native', 'TypeScript', 'MongoDB', 'Cloudinary'],
  },
];

export const services: IService[] = [
  {
    title: 'Frontend Development',
    about:
      'I can build beautiful and scalable SPAs using <b>React</b> + <b>TypeScript</b>, <b>Redux-toolkit</b>, <b>Next.js</b>, <b>Tailwind CSS</b> and others.',
  },
  {
    title: 'e2e Testing & Unit Tests',
    about:
      'I am able to create e2e tests using <b>Cypress</b> and unit tests using <b>Jest & React Testing Library</b>.',
  },
  {
    title: 'Mobile Application Development',
    about:
      'I can develop beautiful and scalable mobile applications for <b>iOS</b> and <b>Android</b> using <b>React Native</b>.',
  },
  {
    title: 'Backend  Development',
    about: 'Handle databases, server, api using <b>Express.js</b> & other popular frameworks.',
  },
  {
    title: 'Competitive Coder',
    about:
      'A daily <b>problem solver</b>, <b>quick learner</b>, very <b>passionate about coding</b>, and love to take up challenging tasks.',
  },
  {
    title: 'Scrum Master',
    about: 'A high-quality coding service with a focus on the <b>Scrum</b> methodology.',
  },
  {
    title: 'Experienced Teacher',
    about: 'A vast amount of experience in teaching and mentoring students.',
  },
];

export const journey: IJourney[] = [
  {
    year: '2019',
    title: 'Full Stack Web Development',
    category: 'education',
    description:
      'Completed Full Stack Developer Program, building real-world projects with agile methodologies, and gaining valuable skills in Full-Stack Development, Front-End Development, Back-End Web Development and Soft Skills.',
  },
  {
    year: '2014-2017',
    title: `Master's Degree in Administration and Management`,
    category: 'education',
    description: 'Gained valuable skills in project management, business management, and leadership.',
  },
  {
    year: '2005-2011',
    title: `Bachelor's Degree in Math and Physics Education`,
    category: 'education',
    description:
      'Gained valuable skills in educational technology, physics and math education, teaching, process planning, and supervisory skills.',
  },
  {
    year: '2022-Present',
    title: 'Intructor - Full Stack Web Developer | Atexis',
    category: 'experience',
    description:
      'Experienced educator with 12+ years of expertise in full-stack development, teaching coding, frameworks and libraries, project execution, SCRUM methodology, problem-solving, communication, physics education and management.',
  },
  {
    year: '2021-2022',
    title: 'Frontend Web Developer | BlustFunnels',
    category: 'experience',
    description: `Experienced Frontend Developer with expertise in React, TypeScript, Jest, agile methodology, and Git, effectively developing and maintaining Blast Funnels' website and web-based applications, meeting project deadlines, and contributing to the team's success through writing clean, effective code.`,
  },
  {
    year: '2020-2021',
    title: 'Frontend Developer | Four Tools Language Academy',
    category: 'experience',
    description:
      'Experienced full-stack developer with MERN stack expertise, leading the design and development of a robust internal management tool with seamless frontend-backend integration, utilizing Git, Github, SCRUM methodology, communication, and problem-solving skills.',
  },
  {
    year: '2019-2020',
    title: 'Frontend Developer | World Travelers',
    category: 'experience',
    description:
      'Developed World Travelers, a Next.js and Typescript SPA using Postgres and MongoDB with Prisma and Mongoose as ORMs, Socket.io, Nodemailer, Auth0, and Cloudinary for the backend, and ChakraUI, React, ReactQuery, Leaflet, Rainbowkit, Wagmi, and Ethers.js for the frontend, utilizing Git & Github for version control, SCRUM methodology, and railway and Heroku for deployment, enabling users to create and filter trips, pay, chat, and interact, showcasing skills in Full-Stack Development, Scrum, Front-end Design, and other relevant technologies.',
  },
];

export const categories: Category[] = [
  'All',
  'TypeScript',
  'React',
  'React Native',
  'Next',
  'JavaScript',
  'TailwindCSS',
  'ChakraUI',
];
