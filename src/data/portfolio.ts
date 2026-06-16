export type Project = {
  title: string;
  category: string;
  github?: string;
  demo?: string;
  image?: string;
  tools: string[];
  problem: string;
  built: string[];
  impact: string;
};

export type ExperienceItem = {
  role: string;
  organization: string;
  dates: string;
  tools?: string[];
  bullets: string[];
};

export type EducationItem = {
  school: string;
  degree: string;
  dates?: string;
};

export type SkillGroup = {
  name: string;
  skills: string[];
};

export type PortfolioData = {
  personal: {
    name: string;
    location: string;
    email: string;
    linkedin: string;
    github: string;
    headline: string;
    summary: string;
    about: string;
  };
  targetRoles: string[];
  skills: SkillGroup[];
  projects: Project[];
  experience: ExperienceItem[];
  education: EducationItem[];
  resume: {
    path: string;
    label: string;
  };
};

const email = 'kimberlypeters07@gmail.com';
const linkedin = 'https://www.linkedin.com/in/kimberly-atta-peters-531531177';
const github = 'https://github.com/Kimmyatta';

export const portfolio: PortfolioData = {
  personal: {
    name: 'Kimberly Atta-Peters',
    location: 'St. Paul, Minnesota',
    email,
    linkedin,
    github,
    headline: 'Artificial Intelligence | Data Science | Machine Learning',
    summary:
      'Graduate student in Artificial Intelligence with experience developing machine learning models, data pipelines, and AI applications using Python, SQL, AWS, and modern MLOps practices. Experienced in predictive modeling, RAG systems, and applying AI technologies to solve real-world challenges.',
    about:
      'With a multidisciplinary background spanning artificial intelligence, data analytics, information systems, and law, I have applied machine learning, generative AI, data analytics, automation, and cloud technologies through academic projects, research assistantships, and professional experience to solve practical problems and support data-driven decision making.',
  },
  targetRoles: [
    'Artificial Intelligence',
    'Data Science',
    'Machine Learning',
  ],
  skills: [
    {
      name: 'Programming',
      skills: ['Python', 'SQL'],
    },
    {
      name: 'Machine Learning',
      skills: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'XGBoost', 'Logistic Regression', 'Neural Networks'],
    },
    {
      name: 'GenAI',
      skills: ['LLMs', 'RAG', 'LangChain', 'LangGraph', 'FAISS', 'SentenceTransformers'],
    },
    {
      name: 'MLOps / Cloud',
      skills: ['Apache Airflow', 'Docker', 'Kubernetes', 'AWS S3', 'AWS SQS', 'FastAPI', 'Git', 'GitHub'],
    },
    {
      name: 'Analytics',
      skills: ['Power BI', 'Tableau', 'Excel', 'pandas', 'NumPy'],
    },
  ],
  projects: [
    {
      title: 'AI Compliance Assistant',
      category: 'GenAI / RAG / AI Governance',
      github: 'https://github.com/Kimmyatta/ai-compliance-platform',
      demo: '#',
      image: '/images/compliance.png',
      tools: ['Python', 'FastAPI', 'React', 'TypeScript', 'FAISS', 'Groq', 'SentenceTransformers', 'LangGraph', 'Streamlit'],
      problem:
        'Built a regulatory review and audit platform for privacy documents and FDA-cleared AI/ML medical device submissions.',
      built: [
        'RAG workflow for HIPAA, CCPA, HITECH, and FDA AI/ML guidance retrieval',
        'Document upload review pipeline for PDF, DOCX, and TXT files',
        'FastAPI backend with privacy review, FDA audit, and background job endpoints',
        'React + TypeScript frontend for uploads, audit status, results, and report downloads',
        'Experimental LangGraph FDA audit workflow with risk scoring and human-review escalation',
      ],
      impact:
        'Demonstrates applied GenAI, retrieval systems, AI governance, API design, and production-style compliance workflow engineering.',
    },
    {
      title: 'Asynchronous AI Inference System',
      category: 'MLOps',
      github: 'https://github.com/Kimmyatta/async-ai-inference-system',
      image: '/images/mlops.png',
      tools: ['Python', 'scikit-learn', 'Airflow', 'AWS S3', 'AWS SQS', 'Docker', 'Kubernetes', 'boto3', 'joblib'],
      problem:
        'Built an asynchronous machine learning inference system that trains a model, queues prediction jobs, and scales inference consumers.',
      built: [
        'Airflow training DAG that trains a Logistic Regression model on the breast cancer dataset and uploads model artifacts to S3',
        'Queue population DAG that reads test data from S3 and sends one SQS message per prediction record',
        'Dockerized Python consumer that loads the model from S3, polls SQS, performs inference, and writes JSON predictions back to S3',
        'Kubernetes deployment for horizontally scalable inference consumers',
        'Retry-safe message handling that deletes SQS messages only after successful prediction processing',
      ],
      impact:
        'Demonstrates production-style MLOps patterns for model training, artifact storage, queue-based inference, containerization, and scalable cloud deployment.',
    },
    {
      title: 'Chicago Crime Prediction',
      category: 'Machine Learning',
      github: 'https://github.com/Kimmyatta/Chicago_Crime_Prediction',
      image: '/images/chicago-crime.png',
      tools: ['Python', 'pandas', 'scikit-learn', 'XGBoost', 'Logistic Regression', 'Neural Networks', 'SMOTE'],
      problem: 'Predicted crime occurrence using historical Chicago crime data with class imbalance and tabular prediction challenges.',
      built: [
        'Feature engineering with lag variables, rolling averages, temporal patterns, and location-based information',
        'Applied SMOTE to improve minority-class representation for imbalanced crime occurrence data',
        'Compared Logistic Regression, XGBoost, and Neural Networks with threshold tuning across models',
        'Evaluated models using F1-score, precision, recall, and ROC-AUC',
      ],
      impact: 'Found that XGBoost and Logistic Regression delivered stronger, more stable F1 performance than Neural Networks, reinforcing practical model selection for tabular ML problems.',
    },
    {
      title: 'International Admissions Analytics',
      category: 'SQL / Analytics',
      github: 'https://github.com/Kimmyatta/International_Admissions_Analytics',
      image: '/images/admissions.png',
      tools: ['SQL', 'Python', 'Excel', 'Power BI', 'Tableau'],
      problem: 'Analyzed anonymized international admissions data to identify enrollment trends.',
      built: [
        'Relational database model',
        'SQL queries for application progression, conversion-rate, source, program, country, and term reporting',
        'Schema and query examples without private student records or confidential admissions data',
        'Dashboards and reports for decision-making',
      ],
      impact: 'Supported data-driven admissions decisions through structured reporting and enrollment outcome analysis.',
    },
  ],
  experience: [
    {
      role: 'Graduate Research Assistant, UROP',
      organization: 'University of St. Thomas',
      dates: 'May 2025 - Present',
      tools: ['Python', 'scikit-learn', 'TensorFlow', 'pandas', 'Power BI', 'Tableau', 'Salesforce', 'SharePoint', 'Power Automate'],
      bullets: [
        'Use Python and machine learning libraries such as scikit-learn and TensorFlow to analyze research datasets and evaluate metrics including accuracy, precision, recall, and F1-score.',
        'Build dashboards and reports with Python, pandas, Power BI, and Tableau to track participation, funding allocation, and program trends.',
        'Develop automated data pipelines and workflows using Power Automate, SharePoint, and Salesforce to streamline data collection and application processing.',
        'Analyze current and historical data to generate reports for the research board.',
      ],
    },
    {
      role: 'Graduate Research Assistant, International Admissions',
      organization: 'University of St. Thomas',
      dates: 'June 2024 - May 2025',
      tools: ['SQL', 'Python', 'Excel', 'pandas', 'SharePoint', 'Salesforce', 'Ellucian Banner'],
      bullets: [
        'Developed SQL queries to analyze admissions data and identify trends that helped admissions counselors support enrollment decisions.',
        'Created reports and visualizations in Python, Excel, and pandas to communicate findings for admissions decision-making.',
        'Managed student records and processed application documents using SharePoint, Salesforce, and Ellucian Banner.',
      ],
    },
    {
      role: 'Data Analyst',
      organization: 'Tuspa Company Limited',
      dates: 'Feb 2023 - Apr 2024',
      tools: ['Excel', 'Python', 'pandas', 'NumPy', 'Power BI'],
      bullets: [
        'Analyzed real estate datasets using Excel, Python, pandas, and NumPy to identify trends and support business decisions.',
        'Created weekly and monthly reports on occupancy, rental performance, and expenses for business stakeholders.',
        'Built Power BI dashboards to track key metrics such as rent collection and property performance.',
        'Cleaned, validated, and standardized data to improve data quality and reporting accuracy.',
      ],
    },
  ],
  education: [
    {
      school: 'University of St. Thomas',
      degree: 'M.S. Artificial Intelligence',
      dates: 'Expected December 2026',
    },
    {
      school: 'Wisconsin International University College, Ghana',
      degree: 'Bachelor of Laws',
    },
    {
      school: 'University of Ghana',
      degree: 'Bachelor of Arts, Information Systems and Psychology',
    },
  ],
  resume: {
    path: '/resume/Kimberly-Atta-Peters-Resume.pdf',
    label: 'Kimberly-Atta-Peters-Resume.pdf',
  },
};
