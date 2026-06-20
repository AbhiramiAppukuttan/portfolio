export const personal = {
  name:     'Abhirami Appukuttan',
  role:     'Full Stack Developer',
  email:    'abhiramiappukuttan09@gmail.com',
  phone:    '+91 9778246540',
  location: 'Ernakulam, Kerala',
  linkedin: 'https://linkedin.com/in/abhirami-appukuttan',
  github:   'https://github.com/abhirami-appukuttan',
}

export const typedPhrases = [
  'MERN stack apps that ship.',
  'APIs that actually scale.',
  'React UIs people enjoy using.',
  'backends that hold under load.',
  'code that makes it to production.',
]

export const stats = [
  { value: '1.5+', label: 'Years in Production' },
  { value: '1',    label: 'Live Project' },
  { value: '80%',  label: 'Less Manual Work' },
  { value: '70%',  label: 'Faster Processing' },
]

export const skills = [
  {
    category: 'Frontend',
    color: 'emerald',
    icon: 'code',
    tags: ['React.js', 'Redux', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    category: 'Backend',
    color: 'violet',
    icon: 'server',
    tags: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'PHP', 'Laravel'],
  },
  {
    category: 'Databases',
    color: 'amber',
    icon: 'database',
    tags: ['MongoDB', 'MySQL'],
  },
  {
    category: 'Tools & Platforms',
    color: 'rose',
    icon: 'tool',
    tags: ['Git', 'GitHub', 'Postman', 'Vercel', 'Render', 'VS Code'],
  },
]

export const proficiency = [
  { label: 'React.js',          type: 'Frontend Library',   level: 90 },
  { label: 'Node.js',           type: 'Runtime Environment',level: 85 },
  { label: 'Express.js',        type: 'Backend Framework',  level: 85 },
  { label: 'MongoDB',           type: 'NoSQL Database',     level: 82 },
  { label: 'JavaScript ES6+',   type: 'Core Language',      level: 88 },
  { label: 'Tailwind CSS',      type: 'Utility CSS',        level: 85 },
  { label: 'MySQL',             type: 'Relational Database', level: 78 },
  { label: 'PHP / Laravel',     type: 'Backend Framework',  level: 75 },
]

export const experience = [
  {
    role:    'MERN Stack Developer cum Trainer',
    company: 'Futura Labs Technologies',
    period:  'Aug 2025 – Present',
    current: true,
    points: [
      'Own the full stack of a live CRM — from MongoDB schema design and Express middleware to React dashboards used by real clients daily',
      'Engineered JWT-secured REST APIs with role-based access across admin, agent, and user tiers, handling all auth edge cases in production',
      'Cut frontend re-render overhead by restructuring Redux state shape, making the dashboard noticeably faster without touching the backend',
      'Run weekly hands-on MERN training for junior developers — covering Node internals, React patterns, and how to debug things that break in prod',
    ],
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'Redux'],
  },
  {
    role:    'MERN Stack Developer Intern',
    company: 'Irohub Infotech',
    period:  'Jan 2025 – Jul 2025',
    current: false,
    points: [
      'Shipped full-stack features solo — writing the MongoDB query, the Express route, and the React UI for each one end to end',
      'Built and maintained 10+ REST endpoints with proper validation, error handling, and pagination for a data-heavy admin panel',
      'Converted legacy class components to functional React with hooks, reducing component code by roughly 40% without breaking anything',
      'Worked on a real product with Git feature branches, PR reviews, and Render deployments — actual team workflow from week one',
    ],
    tags: ['Node.js', 'Express.js', 'React.js', 'MongoDB', 'Git'],
  },
]

export const projects = [
  {
    title:    'FinTrack',
    subtitle: 'Personal Finance Tracking Web App',
    desc:     'Spreadsheets were not cutting it — so I built FinTrack. It tracks budgets, savings goals, and recurring subscriptions in one dashboard, pulls live exchange rates across 150+ currencies, and auto-generates monthly reports. Users went from 4 hours of manual entry to under 30 minutes.',
    highlights: [
      'Free vs premium tier with JWT auth and feature-level access gates',
      'Live currency conversion with rate caching to avoid redundant API calls',
      'Auto-generated monthly summaries — no manual data entry required',
      'Subscription tracker with renewal alerts and overspend warnings',
    ],
    tech:     ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT'],
    live:     'https://fin-frontend-seven.vercel.app/',
    github:   'https://github.com/abhirami-appukuttan',
    featured: true,
    impact:   '80% less manual effort',
  },
  {
    title:    'AyurCare',
    subtitle: 'Online Clinic Booking System',
    desc:     'A clinic management system where patients book, doctors confirm, and admins track everything — built on Laravel and MySQL. Normalized the schema, added the right indexes, and brought appointment processing time down by 70% compared to the first version.',
    highlights: [
      'Three-role system: patient books, doctor confirms, admin controls everything',
      'Package-based treatment plans with automatic slot allocation logic',
      'Normalized MySQL schema with indexed foreign keys — queries that stay fast at scale',
      'Status workflow automation: booked → confirmed → completed → follow-up',
    ],
    tech:     ['Laravel', 'PHP', 'MySQL', 'HTML', 'CSS'],
    live:     null,
    github:   'https://github.com/abhirami-appukuttan',
    featured: false,
    impact:   '70% faster processing',
  },
]

export const education = [
  {
    degree: 'Masters of Computer Application (MCA)',
    grade:  '76%',
    school: 'Santhigiri College of Computer Sciences, Thodupuzha',
    period: 'Aug 2023 – May 2025',
  },
  {
    degree: 'Bachelor of Computer Application (BCA)',
    grade:  '61%',
    school: 'Mount Carmel College, Karukadom',
    period: 'Sep 2020 – May 2023',
  },
]

export const certifications = [
  'Full Stack Development (MERN)',
  'NPTEL – Database Management Systems',
  'Web Designing',
]
