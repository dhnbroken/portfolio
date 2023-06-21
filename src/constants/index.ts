import {
  mobile,
  backend,
  creator,
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
  springboot,
  ncc,
  shinhands,
  hnicer,
  itech,
  travelPlanner,
  mysql
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
    id: 'contact',
    title: 'Contact'
  }
];

const services = [
  {
    title: 'Web Developer',
    icon: web
  },
  {
    title: 'React Native Developer',
    icon: mobile
  },
  {
    title: 'Backend Developer',
    icon: backend
  },
  {
    title: 'Content Creator',
    icon: creator
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
    name: 'springboot',
    icon: springboot
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

const testimonials = [
  {
    testimonial: 'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
  {
    testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg'
  },
  {
    testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg'
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
        name: 'reactjs',
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
  }
];

export { services, technologies, experiences, testimonials, projects };
