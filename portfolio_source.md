# Kimberly Atta-Peters Portfolio Source

## Personal Info

Name: Kimberly Atta-Peters
Location: St. Paul, Minnesota
Email: kimberlypeters07@gmail.com
LinkedIn: https://www.linkedin.com/in/kimberly-atta-peters-531531177
GitHub: https://github.com/Kimmyatta

## Target Roles

- Artificial Intelligence
- Data Science
- Machine Learning

## Professional Summary

Graduate student in Artificial Intelligence with experience developing machine learning models, data pipelines, and AI applications using Python, SQL, AWS, and modern MLOps practices. Experienced in predictive modeling, RAG systems, and applying AI technologies to solve real-world challenges.

## About

With a multidisciplinary background spanning artificial intelligence, data analytics, information systems, and law, I have applied machine learning, generative AI, data analytics, automation, and cloud technologies through academic projects, research assistantships, and professional experience to solve practical problems and support data-driven decision making.

## Skills

### Programming

Python, SQL

### Machine Learning

Scikit-learn, TensorFlow, PyTorch, XGBoost, Logistic Regression, Neural Networks

### GenAI

LLMs, RAG, LangChain, LangGraph, FAISS, SentenceTransformers

### MLOps / Cloud

Apache Airflow, Docker, Kubernetes, AWS S3, AWS SQS, FastAPI, Git, GitHub

### Analytics

Power BI, Tableau, Excel, pandas, NumPy

## Projects

### AI Compliance Assistant

Category: GenAI / RAG / AI Governance
GitHub: https://github.com/Kimmyatta/ai-compliance-platform
Demo: placeholder
Tools: Python, FastAPI, React, TypeScript, FAISS, Groq, SentenceTransformers, LangGraph, Streamlit

Problem:
Built a regulatory review and audit platform for privacy documents and FDA-cleared AI/ML medical device submissions.

What I Built:
- RAG workflow for HIPAA, CCPA, HITECH, and FDA AI/ML guidance retrieval
- Document upload review pipeline for PDF, DOCX, and TXT files
- FastAPI backend with privacy review, FDA audit, and background job endpoints
- React + TypeScript frontend for uploads, audit status, results, and report downloads
- Experimental LangGraph FDA audit workflow with risk scoring and human-review escalation

Impact:
Demonstrates applied GenAI, retrieval systems, AI governance, API design, and production-style compliance workflow engineering.

### Asynchronous AI Inference System

Category: MLOps
GitHub: https://github.com/Kimmyatta/async-ai-inference-system
Tools: Python, scikit-learn, Airflow, AWS S3, AWS SQS, Docker, Kubernetes, boto3, joblib

Problem:
Built an asynchronous machine learning inference system that trains a model, queues prediction jobs, and scales inference consumers.

What I Built:
- Airflow training DAG that trains a Logistic Regression model on the breast cancer dataset and uploads model artifacts to S3
- Queue population DAG that reads test data from S3 and sends one SQS message per prediction record
- Dockerized Python consumer that loads the model from S3, polls SQS, performs inference, and writes JSON predictions back to S3
- Kubernetes deployment for horizontally scalable inference consumers
- Retry-safe message handling that deletes SQS messages only after successful prediction processing

Impact:
Demonstrates production-style MLOps patterns for model training, artifact storage, queue-based inference, containerization, and scalable cloud deployment.

### Chicago Crime Prediction

Category: Machine Learning
GitHub: https://github.com/Kimmyatta/Chicago_Crime_Prediction
Tools: Python, pandas, scikit-learn, XGBoost, Logistic Regression, Neural Networks, SMOTE

Problem:
Predicted crime occurrence using historical Chicago crime data with class imbalance and tabular prediction challenges.

What I Built:
- Feature engineering with lag variables, rolling averages, temporal patterns, and location-based information
- Applied SMOTE to improve minority-class representation for imbalanced crime occurrence data
- Compared Logistic Regression, XGBoost, and Neural Networks with threshold tuning across models
- Evaluated models using F1-score, precision, recall, and ROC-AUC

Impact:
Found that XGBoost and Logistic Regression delivered stronger, more stable F1 performance than Neural Networks, reinforcing practical model selection for tabular ML problems.

### International Admissions Analytics

Category: SQL / Analytics
GitHub: https://github.com/Kimmyatta/International_Admissions_Analytics
Tools: SQL, Python, Excel, Power BI, Tableau

Problem:
Analyzed anonymized international admissions data to identify enrollment trends.

What I Built:
- Relational database model
- SQL queries for application progression, conversion-rate, source, program, country, and term reporting
- Schema and query examples without private student records or confidential admissions data
- Dashboards and reports for decision-making

Impact:
Supported data-driven admissions decisions through structured reporting and enrollment outcome analysis.

## Experience

### Graduate Research Assistant, UROP

Organization: University of St. Thomas
Dates: May 2025 - Present
Tools: Python, scikit-learn, TensorFlow, pandas, Power BI, Tableau, Salesforce, SharePoint, Power Automate

Bullets:
- Use Python and machine learning libraries such as scikit-learn and TensorFlow to analyze research datasets and evaluate metrics including accuracy, precision, recall, and F1-score.
- Build dashboards and reports with Python, pandas, Power BI, and Tableau to track participation, funding allocation, and program trends.
- Develop automated data pipelines and workflows using Power Automate, SharePoint, and Salesforce to streamline data collection and application processing.
- Analyze current and historical data to generate reports for the research board.

### Graduate Research Assistant, International Admissions

Organization: University of St. Thomas
Dates: June 2024 - May 2025
Tools: SQL, Python, Excel, pandas, SharePoint, Salesforce, Ellucian Banner

Bullets:
- Developed SQL queries to analyze admissions data and identify trends that helped admissions counselors support enrollment decisions.
- Created reports and visualizations in Python, Excel, and pandas to communicate findings for admissions decision-making.
- Managed student records and processed application documents using SharePoint, Salesforce, and Ellucian Banner.

### Data Analyst

Organization: Tuspa Company Limited
Dates: Feb 2023 - Apr 2024
Tools: Excel, Python, pandas, NumPy, Power BI

Bullets:
- Analyzed real estate datasets using Excel, Python, pandas, and NumPy to identify trends and support business decisions.
- Created weekly and monthly reports on occupancy, rental performance, and expenses for business stakeholders.
- Built Power BI dashboards to track key metrics such as rent collection and property performance.
- Cleaned, validated, and standardized data to improve data quality and reporting accuracy.

## Education

### University of St. Thomas

M.S. Artificial Intelligence
Expected: December 2026

### Wisconsin International University College, Ghana

Bachelor of Laws

### University of Ghana

Bachelor of Arts, Information Systems and Psychology

## Resume

File path: public/resume/Kimberly-Atta-Peters-Resume.pdf

## Screenshots

AI Compliance Assistant: public/images/compliance.png
Async AI Inference System: public/images/mlops.png
Chicago Crime Prediction: public/images/chicago-crime.png
Admissions Analytics: public/images/admissions.png
