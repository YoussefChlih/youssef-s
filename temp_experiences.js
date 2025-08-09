// Updated experiences array based on Youssef's CV
const experiences = [
  {
    id: 1,
    type: 'education',
    title: 'AI Specialist Technician',
    company: 'École Supérieure de Technologie de Safi (ESTN)',
    location: 'Safi, Morocco',
    duration: '2022 - 2024',
    description: `Comprehensive program in Artificial Intelligence and Data Science, focusing on machine learning, deep learning, computer vision, and natural language processing. Graduated with expertise in developing intelligent solutions for real-world applications.`,
    featured: true,
    badges: ['Graduate', 'AI Specialist'],
    responsibilities: [
      'Advanced coursework in Machine Learning and Deep Learning algorithms',
      'Hands-on projects in Computer Vision and Natural Language Processing',
      'Data Science methodologies and statistical analysis',
      'Cloud computing platforms and deployment strategies',
      'Agile development methodologies and project management'
    ],
    achievements: [
      {
        metric: '12+ Certifications',
        description: 'Completed industry-recognized certifications in AI, Data Science, and Cloud technologies'
      },
      {
        metric: '20+ Projects',
        description: 'Successfully completed various AI/ML projects demonstrating practical application of skills'
      },
      {
        metric: '95% Python Proficiency',
        description: 'Achieved expert-level proficiency in Python programming for AI applications'
      },
      {
        metric: 'Azure & Oracle Cloud',
        description: 'Certified in major cloud platforms for AI and data processing'
      }
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'OpenCV', 'Azure AI', 'Oracle Cloud'],
    projects: [
      {
        name: 'Computer Vision Classification System',
        description: 'Advanced image classification system using deep learning techniques',
        impact: 'Achieved 92% accuracy in multi-class image recognition',
        viewable: true,
        fullDescription: `Developed a comprehensive computer vision system for automatic image classification using convolutional neural networks. The system incorporates advanced preprocessing techniques and data augmentation to achieve high accuracy across multiple object categories.`,
        image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=400&fit=crop',
        technologies: ['Python', 'TensorFlow', 'OpenCV', 'Keras', 'NumPy'],
        metrics: [
          { label: 'Accuracy', value: '92%' },
          { label: 'Dataset Size', value: '10K+ images' },
          { label: 'Classes', value: '15 categories' }
        ],
        challenges: [
          {
            challenge: 'Handling imbalanced datasets and achieving consistent performance across all classes',
            solution: 'Implemented data augmentation techniques and class weighting strategies to improve model robustness'
          }
        ],
        team: { size: 1, role: 'Developer' }
      },
      {
        name: 'Natural Language Processing Sentiment Analyzer',
        description: 'NLP system for sentiment analysis in multiple languages',
        impact: 'Processed and analyzed sentiment from 50K+ text samples',
        viewable: true,
        fullDescription: `Built a sophisticated NLP system capable of analyzing sentiment in text data with support for multiple languages. The system uses advanced preprocessing and feature extraction techniques to achieve high accuracy in sentiment classification.`,
        technologies: ['Python', 'NLTK', 'spaCy', 'Scikit-learn', 'Pandas'],
        metrics: [
          { label: 'Accuracy', value: '89%' },
          { label: 'Languages', value: '3 supported' },
          { label: 'Processing Speed', value: '1K texts/sec' }
        ]
      },
      {
        name: 'Data Science Analytics Dashboard',
        description: 'Interactive dashboard for data visualization and insights',
        impact: 'Enabled data-driven decision making through comprehensive visualizations',
        viewable: true,
        fullDescription: `Created an interactive data analytics dashboard that processes and visualizes complex datasets, providing stakeholders with actionable insights through dynamic charts, graphs, and statistical summaries.`,
        technologies: ['Python', 'Streamlit', 'Plotly', 'Pandas', 'Matplotlib'],
        metrics: [
          { label: 'Data Points', value: '1M+ processed' },
          { label: 'Visualizations', value: '15+ chart types' },
          { label: 'Response Time', value: '<2s' }
        ]
      }
    ],
    testimonial: {
      quote: 'Youssef demonstrated exceptional technical skills and innovative thinking throughout his studies, consistently delivering high-quality projects that showcase his potential in AI and data science.',
      author: 'Faculty Supervisor',
      role: 'Academic Supervisor',
      title: 'Professor of AI'
    }
  },
  {
    id: 2,
    type: 'certification',
    title: 'Oracle Cloud Infrastructure 2024 Certified AI Foundations Associate',
    company: 'Oracle',
    location: 'Online',
    duration: '2024',
    description: `Comprehensive certification in Oracle Cloud Infrastructure AI services, demonstrating expertise in cloud-based AI foundations, machine learning services, and AI application deployment on Oracle Cloud.`,
    featured: true,
    badges: ['Oracle Certified', 'Cloud AI'],
    responsibilities: [
      'Understanding of AI and ML concepts in cloud environments',
      'Oracle Cloud Infrastructure AI services and capabilities',
      'AI model deployment and management strategies',
      'Cloud security and governance for AI applications',
      'Cost optimization for AI workloads in the cloud'
    ],
    achievements: [
      {
        metric: 'Oracle Certified',
        description: 'Successfully achieved Oracle Cloud Infrastructure AI Foundations Associate certification'
      },
      {
        metric: 'Cloud AI Expertise',
        description: 'Demonstrated proficiency in cloud-based AI service deployment and management'
      }
    ],
    technologies: ['Oracle Cloud', 'AI Services', 'Machine Learning', 'Cloud Computing', 'DevOps'],
    certImage: '/assets/images/certificates/Oracle Cloud Infrastructure 2024 Certified AI Foundations Associate.png'
  },
  {
    id: 3,
    type: 'certification',
    title: 'Azure AI Document Intelligence Fundamentals',
    company: 'Microsoft Azure',
    location: 'Online',
    duration: '2024',
    description: `Certification in Azure AI Document Intelligence, focusing on automated document processing, form recognition, and intelligent document analysis using Microsoft Azure AI services.`,
    badges: ['Microsoft Certified', 'Azure AI'],
    achievements: [
      {
        metric: 'Azure AI Certified',
        description: 'Mastered Azure AI Document Intelligence services and capabilities'
      },
      {
        metric: 'Document Processing',
        description: 'Expert-level knowledge in automated document analysis and data extraction'
      }
    ],
    technologies: ['Azure AI', 'Document Intelligence', 'Form Recognizer', 'Cognitive Services', 'REST APIs'],
    certImage: '/assets/images/certificates/Fundamentals  of Azure AI Document Intelligence.png'
  },
  {
    id: 4,
    type: 'certification',
    title: 'Azure Stream Analytics Certification',
    company: 'Microsoft Azure',
    location: 'Online',
    duration: '2024',
    description: `Advanced certification in Azure Stream Analytics for real-time data processing and analytics, covering stream processing concepts, event hubs, and IoT data analysis.`,
    badges: ['Microsoft Certified', 'Stream Analytics'],
    achievements: [
      {
        metric: 'Real-time Analytics',
        description: 'Expertise in processing and analyzing streaming data in real-time'
      },
      {
        metric: 'IoT Integration',
        description: 'Proficient in integrating IoT data streams with Azure analytics services'
      }
    ],
    technologies: ['Azure Stream Analytics', 'Event Hubs', 'IoT Hub', 'Power BI', 'SQL'],
    certImage: '/assets/images/certificates/Get started with Azure Stream Analytics.png'
  },
  {
    id: 5,
    type: 'certification',
    title: 'Python Programming Certifications',
    company: 'Multiple Providers',
    location: 'Online',
    duration: '2023-2024',
    description: `Comprehensive Python programming certifications including Introduction to Python, Intermediate Python Programming, and Python Programmer Bootcamp, demonstrating progressive mastery of Python for AI and data science applications.`,
    badges: ['Python Certified', 'Programming'],
    achievements: [
      {
        metric: '95% Python Proficiency',
        description: 'Achieved expert-level proficiency in Python programming'
      },
      {
        metric: 'Multiple Certifications',
        description: 'Completed beginner, intermediate, and advanced Python programming courses'
      },
      {
        metric: 'AI/ML Focus',
        description: 'Specialized in Python for artificial intelligence and machine learning applications'
      }
    ],
    technologies: ['Python', 'Object-Oriented Programming', 'Data Structures', 'Algorithms', 'Libraries'],
    certImages: [
      '/assets/images/certificates/Introduction to Python.png',
      '/assets/images/certificates/Interemediate Python Programming.png',
      '/assets/images/certificates/Python programmer Bootcamp.png'
    ]
  },
  {
    id: 6,
    type: 'certification',
    title: 'Data Science & Machine Learning Certifications',
    company: 'Various Institutions',
    location: 'Online',
    duration: '2023-2024',
    description: `Comprehensive certifications in Data Science fundamentals, Python for Data Science projects, Machine Learning in Production, and The Machine Learning Process A-Z, providing end-to-end expertise in data science workflows.`,
    badges: ['Data Science', 'ML Certified'],
    achievements: [
      {
        metric: 'End-to-End ML Pipeline',
        description: 'Mastered complete machine learning project lifecycle from data collection to deployment'
      },
      {
        metric: 'Production ML Systems',
        description: 'Expertise in deploying and maintaining machine learning models in production environments'
      },
      {
        metric: 'Data Science Methodology',
        description: 'Proficient in data science best practices and methodologies'
      }
    ],
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Jupyter', 'MLOps'],
    certImages: [
      '/assets/images/certificates/Introduction to Data Science.png',
      '/assets/images/certificates/Python project for Data science.png',
      '/assets/images/certificates/Machine learning in Production.png',
      '/assets/images/certificates/The Machine Learning Process A-Z.png'
    ]
  },
  {
    id: 7,
    type: 'certification',
    title: 'Specialized AI Certifications',
    company: 'AI Learning Platforms',
    location: 'Online',
    duration: '2023-2024',
    description: `Specialized certifications in Natural Language Processing for AI, Mathematics for Machine Learning, and Agile methodology, providing comprehensive coverage of AI fundamentals and professional development skills.`,
    badges: ['NLP Certified', 'Mathematics', 'Agile'],
    achievements: [
      {
        metric: 'NLP Expertise',
        description: 'Advanced knowledge in natural language processing techniques and applications'
      },
      {
        metric: 'Mathematical Foundation',
        description: 'Strong mathematical background essential for machine learning algorithms'
      },
      {
        metric: 'Agile Methodology',
        description: 'Proficient in agile development practices for AI/ML project management'
      }
    ],
    technologies: ['NLP', 'NLTK', 'spaCy', 'Linear Algebra', 'Statistics', 'Calculus', 'Scrum', 'Kanban'],
    certImages: [
      '/assets/images/certificates/Intro to NLP for AI.png',
      '/assets/images/certificates/Mathematics.png',
      '/assets/images/certificates/Delivering Quality Work With Agility.png'
    ]
  }
];
