import { ExperienceItem, SkillCategory } from '../types';

export const profileData = {
  name: 'Abhay',
  headline: 'Data Analyst | SQL | Power BI | Python | Excel',
  subheadline: 'Data Analyst Fresher | SQL | Power BI | Python | Excel',
  heroTagline: 'Turning Data Into Insights. Helping Businesses Make Better Decisions.',
  heroIntro: "Hi, I'm Abhay, a recent Computer Science graduate passionate about data analytics and business intelligence. I work with SQL, Power BI, Excel, and Python to clean data, explore patterns, build meaningful visualizations, and communicate insights that support better decisions.",
  aboutText: "I'm a recent B.Tech Computer Science graduate building my career in data analytics and business intelligence. Through my training, internship, and hands-on projects, I've developed experience in data cleaning, exploratory data analysis, SQL, Python, Excel, and Power BI. I enjoy turning raw datasets into clear visualizations and actionable findings. I'm looking for an opportunity where I can contribute my analytical skills, solve business problems, and continue learning from an experienced team.",
  careerLevel: 'Recent B.Tech Computer Science graduate seeking entry-level opportunities.',
  location: 'Dharamshala, Himachal Pradesh, India',
  email: 'abuak460@gmail.com',
  phone: '+91 8628909240',
  linkedin: 'https://www.linkedin.com/in/abhay-thakur-22b7b63a8',
  github: 'https://github.com/PortgsDace',
  instagram: 'https://www.instagram.com/abhay_thakur.r10',
  instagramHandle: 'abhay_thakur.r10',
  existingPortfolio: 'https://portgsdace.github.io/Abhay-s-Portfolio',
  targetRoles: [
    'Data Analyst',
    'Junior Business Intelligence Analyst',
    'SQL Analyst',
    'Power BI Analyst',
    'Reporting Analyst'
  ],
  education: [
    {
      id: 'btech',
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'Government College Dharamshala, HPTU',
      period: '2022 – 2026',
      percentage: '78.00%',
      cgpa: '7.45 / 10.0',
      highlights: [
        'Core coursework: Database Management Systems, Data Structures & Algorithms, Object-Oriented Programming, Probability & Statistics.',
        'Final Year Capstone Project: VoteSetu — Decentralized Voting Application on Ethereum blockchain.',
        'Extensive analytical training in relational databases, data pipelines, and quantitative computing.'
      ]
    },
    {
      id: 'class12',
      degree: 'Senior Secondary (Class XII), Non-Medical',
      institution: "Mother's Pride Public School, Bara — HPBOSE",
      period: '2021',
      percentage: '92.20%',
      highlights: [
        'Majors in Mathematics, Physics, and Chemistry.',
        'Distinction in Mathematics and analytical sciences with 92.20% aggregate.'
      ]
    }
  ],
  workExperience: [
    {
      id: 'internshala-ds',
      role: 'Data Science • Internship',
      organization: 'Internshala',
      location: 'Virtual',
      period: 'Jan 2026 – Aug 2026',
      type: 'internship' as const,
      highlights: [
        'Applying Python, SQL, Excel, and Power BI to clean, analyse, and visualise real-world business datasets.',
        'Conducting statistical analysis and exploratory data analysis (EDA) to surface data-driven insights for reporting.',
        'Designing multi-dimensional KPI summaries and executive charts tracking key operational metrics.',
        'Documenting data cleaning workflows and reproducible analytical queries across diverse business domains.'
      ],
      technologies: ['Python', 'SQL', 'Power BI', 'Excel', 'Pandas', 'EDA', 'Data Cleaning', 'Statistics']
    },
    {
      id: 'cs-soft-dev',
      role: 'Full Stack Development • Internship',
      organization: 'CS Soft Solutions',
      location: 'Chandigarh, India',
      period: 'Jan 2026 – Jun 2026',
      type: 'internship' as const,
      highlights: [
        'Developed responsive web pages using HTML5, CSS, and modern JavaScript.',
        'Built and integrated REST APIs using Spring Boot for backend functionality.',
        'Collaborated on the Decentralised Voting App, contributing to front-end development with React.js.',
        'Worked with Node.js and MongoDB to support application backend and data handling.'
      ],
      technologies: ['React.js', 'Spring Boot', 'REST APIs', 'Node.js', 'MongoDB', 'JavaScript', 'HTML5/CSS3']
    }
  ],
  trainingsAndCertifications: [
    {
      id: 'internshala-ds-placement',
      title: 'Data Science Placement Course With AI',
      organization: 'Internshala Trainings',
      location: 'Virtual',
      period: 'Jan 2026 – Aug 2026',
      topics: [
        'Introduction to Data Analytics & Business KPI Frameworks',
        'Data Management and Analysis with MS Excel & Advanced Formulas',
        'Interactive Data Visualization with Power BI & DAX Calculations',
        'Python for Data Analysis (NumPy, Pandas, Matplotlib, Seaborn)',
        'SQL for Data Analysis, Window Functions & CTEs',
        'Machine Learning Fundamentals & Predictive Modeling',
        'Natural Language Processing (NLP) & Deep Learning'
      ]
    },
    {
      id: 'cs-soft-training',
      title: 'Web & Enterprise Systems Development Training',
      organization: 'CS Soft Solutions',
      location: 'Chandigarh',
      period: 'Jan 2026 – May 2026',
      topics: [
        'Component-driven UI development with React.js',
        'Enterprise Java Backend & REST APIs with Spring Boot',
        'NoSQL Database Architecture & Modeling with MongoDB',
        'Full-lifecycle debugging, Git workflows, and deployment'
      ]
    }
  ]
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Data Analysis',
    icon: 'Database',
    skills: [
      { name: 'SQL', highlight: true },
      { name: 'MySQL', highlight: true },
      { name: 'Data Cleaning', highlight: true },
      { name: 'Exploratory Data Analysis (EDA)', highlight: true },
      { name: 'Statistical Analysis' },
      { name: 'Data Interpretation' },
      { name: 'ETL Processes' },
      { name: 'Window Functions & CTEs' }
    ]
  },
  {
    title: 'Business Intelligence',
    icon: 'BarChart3',
    skills: [
      { name: 'Power BI', highlight: true },
      { name: 'Power Query', highlight: true },
      { name: 'DAX Measures', highlight: true },
      { name: 'Interactive Dashboards' },
      { name: 'Executive Reporting' },
      { name: 'KPI Analysis & Benchmarking' },
      { name: 'Data Modeling (Star Schema)' }
    ]
  },
  {
    title: 'Programming & Analytics',
    icon: 'Code2',
    skills: [
      { name: 'Python', highlight: true },
      { name: 'Pandas', highlight: true },
      { name: 'NumPy' },
      { name: 'Matplotlib' },
      { name: 'Seaborn' },
      { name: 'Jupyter Notebook' },
      { name: 'Web Scraping (BeautifulSoup)' }
    ]
  },
  {
    title: 'Spreadsheets',
    icon: 'Sheet',
    skills: [
      { name: 'Microsoft Excel', highlight: true },
      { name: 'Advanced Excel (XLOOKUP, SUMIFS)', highlight: true },
      { name: 'Pivot Tables & Charts' },
      { name: 'Data Preparation' },
      { name: 'Statistical Correlation' },
      { name: 'Sensitivity & Financial Modeling' }
    ]
  },
  {
    title: 'Machine Learning',
    icon: 'Cpu',
    skills: [
      { name: 'Scikit-learn', highlight: true },
      { name: 'Predictive Modeling' },
      { name: 'Customer Clustering (K-Means)' },
      { name: 'Statistical Anomaly Detection (IQR)' },
      { name: 'Model Evaluation (R², RMSE, MAE)' }
    ]
  },
  {
    title: 'Tools & Development',
    icon: 'Wrench',
    skills: [
      { name: 'Git & GitHub', highlight: true },
      { name: 'VS Code' },
      { name: 'Streamlit' },
      { name: 'React.js (Frontend)' },
      { name: 'Node.js & MongoDB' },
      { name: 'REST APIs' }
    ]
  }
];
