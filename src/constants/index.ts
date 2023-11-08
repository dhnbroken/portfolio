import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  go,
  ncc,
  shinhands,
  hnicer,
  itech,
  travelPlanner,
  mysql,
  shinhanSec,
  reactQuery
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About'
  },
  {
    id: 'work',
    title: 'Work'
  },
  {
    id: 'projects',
    title: 'Projects'
  },
  {
    id: 'contact',
    title: 'Contact'
  }
];

const services = [
  {
    title: 'Frontend Developer',
    icon: web
  },
  {
    title: 'Backend Developer',
    icon: backend
  }
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html
  },
  {
    name: 'CSS 3',
    icon: css
  },
  {
    name: 'JavaScript',
    icon: javascript
  },
  {
    name: 'TypeScript',
    icon: typescript
  },
  {
    name: 'React JS',
    icon: reactjs
  },
  {
    name: 'Redux Toolkit',
    icon: redux
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind
  },
  {
    name: 'Node JS',
    icon: nodejs
  },
  {
    name: 'go',
    icon: go
  },
  {
    name: 'react-query',
    icon: reactQuery
  },
  {
    name: 'MongoDB',
    icon: mongodb
  },
  {
    name: 'git',
    icon: git
  },
  {
    name: 'figma',
    icon: figma
  },
  {
    name: 'mysql',
    icon: mysql
  }
];

const experiences = [
  {
    title: 'Front-end Intern',
    company_name: 'NCC Plus',
    icon: ncc,
    iconBg: '#E6DEDD',
    date: 'September 2022 - December 2022',
    points: [
      'Planned, developed, and tested web applications.',
      'Learning Frontend frameworks: React, Angular',
      'Participate in the development of a time-sheet management project.',
      'Learn web development processes, communication techniques, and reporting methods.'
    ]
  },
  {
    title: 'ReactJS Developer',
    company_name: 'ShinhanDS',
    icon: shinhands,
    iconBg: '#FFFFFF',
    date: 'April 2023 - Present',
    points: [
      'Worked as a productive and positive team member to design, code, test, report, and debug operations.',
      'Participate in developing new features for the stock market website.',
      'Contribute to the development of versatile features across various platforms including websites, mobile web, and desktop applications.'
    ]
  }
];

const projects = [
  {
    name: 'HNicer',
    description:
      'Web-based platform that allows users to search, book, and manage sneaker from HNicer - a mockup store branch, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient'
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient'
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient'
      }
    ],
    image: hnicer,
    source_code_link: 'https://github.com/dhnbroken/HNicer-ecommerce'
  },
  {
    name: 'i-Tech Store',
    description:
      'A web application that allows users to purchase products from Apple. And the admin can manage the products. The website features an eye-catching design and support for English and Vietnamese.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'springboot',
        color: 'green-text-gradient'
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient'
      },
      {
        name: 'mysql',
        color: 'green-text-gradient'
      }
    ],
    image: itech,
    source_code_link: 'https://github.com/ThaoHienPhan/JAVA-Project'
  },
  {
    name: 'Travel Planner Group',
    description:
      'A web application that enables users to find popular nearby locations such as restaurants, hotels, attractions, and share them within a group chat. It facilitates easy group travel planning and management.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'firebase',
        color: 'green-text-gradient'
      },
      {
        name: 'nodejs',
        color: 'pink-text-gradient'
      }
    ],
    image: travelPlanner,
    source_code_link: 'https://github.com/dhnbroken/travel-planner-group'
  },
  {
    name: 'Shinhan Securities',
    description:
      'A web application for tracking, trading, and buying/selling stocks. This is a product of Shinhan Group. I am involved in the maintenance and development of new features.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'tailwindcss',
        color: 'pink-text-gradient'
      },
      {
        name: 'electron',
        color: 'green-text-gradient'
      }
    ],
    image: shinhanSec,
    source_code_link: 'https://online.shinhansec.com.vn/'
  }
];

export { services, technologies, experiences, projects };
