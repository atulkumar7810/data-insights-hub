export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  tools: string[];
  domain: string;
  gradient: string;
  outcomes: string[];
  insights: string[];
  approach: string[];
  conclusion: string;
  github: string;
  demo: string | null;
  powerBiEmbed: string | null;
  images: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'atliq-mart-analysis',
    title: 'AtliQ Mart Sales Analysis',
    description: 'Comprehensive FMCG sales analysis with 50,000+ records. Built interactive Power BI dashboards tracking KPIs, revenue trends, and product performance for management decision-making.',
    fullDescription: 'This analysis aims to assess AtliQ Mart\'s supply chain performance to support strategic improvements for the coming period. The focus is on evaluating key indicators such as On-Time Delivery (OT%), In-Full Delivery (IF%), and On-Time In-Full (OTIF%) metrics to identify operational inefficiencies and drive targeted enhancements.',
    tools: ['Power BI', 'Excel', 'SQL'],
    domain: 'FMCG',
    gradient: 'from-blue-600 via-blue-500 to-cyan-500',
    outcomes: [
      'Analyzed 50,000+ sales records',
      'Built interactive KPI dashboards',
      'Identified key revenue drivers',
      'Created management reports',
    ],
    insights: [
      'OTIF performance is critically low at 29.02%, pointing to major inefficiencies in supply chain execution',
      'On-time delivery rate stands at 59.03%, with over 40% of orders delivered late',
      'In-full delivery rate is 52.78%, indicating almost half of orders are not completely fulfilled',
      'High backorder rate of 61.25% affects customer satisfaction and loyalty',
      'Volume fill rate is high at 96.59%, but line fill rate is only 65.96%',
      'On-time performance fluctuates between 54% and 62%, showing operational variability',
    ],
    approach: [
      'Order Quantity and Fill Rate Analysis: Comprehensive overview of core service metrics including order quantities, fill rates, and delivery performance',
      'City-Wise Performance Overview: Breaks down performance metrics by city, showcasing regional differences in delivery efficiency',
      'Cumulative OTIF % and Trend Analysis: Insights into customer performance over time with OT%, IF%, and OTIF% metrics',
    ],
    conclusion: 'Recommendations include enhancing supply chain and order fulfillment by optimizing supplier lead times, implementing real-time tracking and AI-driven forecasting, improving logistics and last-mile delivery, and reducing backorders with better demand planning.',
    github: 'https://github.com/atulkumar7810/AtliQ_Mart-Analysis',
    demo: 'https://atulkumar7810.github.io/my_portfolio_website/pages/Atliq_mart.html',
    powerBiEmbed: 'https://app.powerbi.com/view?r=eyJrIjoiMjA5NTQ2MTktMTYwMC00OGU2LWI0YjEtYmJlNDZiNDdhNzVhIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9',
    images: [
      'https://atulkumar7810.github.io/my_portfolio_website/packages/images/portfolio%20project/AtliQ_Mart.png',
    ],
    featured: true,
  },
  {
    id: 'goodcabs-analysis',
    title: 'GoodCabs Performance Analysis',
    description: 'Transportation analytics for tier-2 city cab service. Analyzed trip volumes, passenger satisfaction, and repeat rates to support 2024 growth targets and operational efficiency.',
    fullDescription: 'This analysis aims to assess GoodCabs\' operational performance to support strategic goals for 2024. The focus is on evaluating key indicators such as trip frequency, passenger feedback, customer retention rates, and trip allocation using a Snowflake Schema for efficient data structuring.',
    tools: ['SQL', 'Power BI', 'Excel'],
    domain: 'Transportation',
    gradient: 'from-amber-500 via-orange-500 to-red-500',
    outcomes: [
      'Identified top cities (Jaipur, Lucknow, Surat)',
      'Analyzed revenue trends & seasonal peaks',
      'Repeat passenger behavior insights',
      'Actionable growth recommendations',
    ],
    insights: [
      'Jaipur, Lucknow, and Surat show the highest trip volumes, while Visakhapatnam, Coimbatore, and Mysore rank lowest',
      'Tourism-centric cities like Jaipur and Kochi report 108.9% higher fares and 77.2% longer travel distances than business hubs',
      'Passenger ratings are highest in Jaipur and Kochi (8.99), while Surat and Vadodara report lowest satisfaction',
      'Demand spikes in April, February, and May, while June and January witness lowest trip counts',
      'Surat leads in repeat passenger rates (42.6%), while Mysore lags behind (11.2%)',
      'Business-focused cities have difficulty meeting performance goals, tourism-oriented cities exceed expectations',
    ],
    approach: [
      'Driver-Passenger Analysis: Key metrics like average driver and passenger ratings, NCA rate, and total trips for 2024',
      'City Metrics: Trip count, RPR (Repeat Passenger Rate), and city-wise trip performance analysis',
      'Trip Insights: Analysis of trip demand, passenger trends, and fare metrics across cities',
    ],
    conclusion: 'Recommendations include enhancing service quality through driver training programs, tailoring pricing strategies with diverse transport choices, aligning pricing with seasonal demand patterns, and introducing loyalty programs for customer retention.',
    github: 'https://github.com/atulkumar7810/GoodCabs-Analysis',
    demo: 'https://atulkumar7810.github.io/my_portfolio_website/pages/GoodCabs_analysis.html',
    powerBiEmbed: 'https://app.powerbi.com/view?r=eyJrIjoiMjZmYjc0N2ItNjZhYy00NzBjLTg2M2YtZTNlYzc1NzJhNjRkIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9',
    images: [
      'https://atulkumar7810.github.io/my_portfolio_website/packages/images/portfolio%20project/goodcabs.png',
    ],
    featured: true,
  },
  {
    id: 'gurgaon-real-estate',
    title: 'Gurgaon Real Estate Analysis',
    description: 'End-to-end data science project with web scraping, EDA, and ML. Built price prediction model achieving 90% accuracy and a Streamlit recommendation system.',
    fullDescription: 'Developed a Streamlit-based Property Analysis Dashboard to streamline property searches in Gurgaon\'s dynamic real estate market. Features include area-wise price trends, society recommendations, and personalized price predictions. Leveraging data from 3,000+ web-scraped listings, the dashboard reduces search time by 30%, enabling quicker, informed decisions for buyers and investors.',
    tools: ['Python', 'Scikit-learn', 'Streamlit', 'Pandas', 'NumPy'],
    domain: 'Real Estate',
    gradient: 'from-emerald-600 via-emerald-500 to-teal-500',
    outcomes: [
      'Scraped 3,000+ property records',
      'Feature engineering & EDA',
      '90% accuracy prediction model',
      'Streamlit web app deployed on AWS EC2',
    ],
    insights: [
      'Data scraped from 99acres and Magic Bricks using Selenium and Beautiful Soup',
      'Price prediction model achieves 90% prediction interval for selected amenities',
      'Recommendation system suggests societies based on landmarks and apartments',
      'Dashboard reduces property search time by 30%',
      'Visualizations include map plots, box plots, and scatter plots for trend analysis',
    ],
    approach: [
      'Data Scraping: Extracted 3,000+ property listings from 99acres and Magic Bricks',
      'Data Cleaning: Used NumPy and Pandas for missing value imputation, outlier removal, and feature engineering',
      'Analysis: Created visualizations to explore price trends, property sizes, and area-wise prices',
      'Machine Learning: Built a price prediction model with 90% prediction interval',
      'Recommendation System: Suggested societies based on landmarks and apartment types',
      'Deployment: Launched the Streamlit dashboard on Amazon EC2',
    ],
    conclusion: 'This project enabled accurate property price predictions, enhanced property recommendations based on location, and provided real-time data insights, improving decision-making for users in the real estate market.',
    github: 'https://github.com/atulkumar7810/Gurgaon_Housing_Market_Analysis',
    demo: null,
    powerBiEmbed: null,
    images: [
      'https://atulkumar7810.github.io/my_portfolio_website/packages/images/portfolio%20project/Gurgaon_analysis_report.jpg',
    ],
    featured: true,
  },
  {
    id: 'quantium-retail-analytics',
    title: 'Quantium Virtual Internship',
    description: 'Retail analytics project focusing on customer transaction analysis, uplift testing, and store layout optimization for data-driven marketing strategies.',
    fullDescription: 'Completed a virtual internship with Quantium, focusing on retail analytics. The project involved analyzing customer transaction data, performing uplift testing to measure the effectiveness of marketing campaigns, and providing recommendations for store layout optimization.',
    tools: ['SQL', 'Excel', 'Power BI', 'Python'],
    domain: 'Retail',
    gradient: 'from-purple-600 via-purple-500 to-pink-500',
    outcomes: [
      'Customer transaction analysis',
      'Automated Power BI reports',
      'Uplift testing & A/B analysis',
      'Store optimization insights',
    ],
    insights: [
      'Identified key customer segments driving sales',
      'Measured marketing campaign effectiveness through A/B testing',
      'Discovered patterns in customer purchasing behavior',
      'Provided data-driven recommendations for store layouts',
    ],
    approach: [
      'Data Exploration: Analyzed customer transaction data to understand purchasing patterns',
      'Customer Segmentation: Identified key customer segments based on purchasing behavior',
      'Uplift Testing: Performed A/B analysis to measure marketing campaign effectiveness',
      'Visualization: Created interactive Power BI dashboards for stakeholder presentations',
    ],
    conclusion: 'The analysis provided actionable insights for improving marketing ROI and optimizing store layouts to enhance customer experience and drive sales.',
    github: 'https://github.com/atulkumar7810',
    demo: null,
    powerBiEmbed: null,
    images: [],
    featured: true,
  },
  {
    id: 'credit-risk-modeling',
    title: 'Credit Risk Modeling',
    description: 'Financial risk assessment model to evaluate creditworthiness and support lending decisions. Built classification models using Python and machine learning techniques.',
    fullDescription: 'Developed a credit risk modeling system to assess the creditworthiness of loan applicants. The project involved building classification models to predict the likelihood of default, helping financial institutions make informed lending decisions.',
    tools: ['Python', 'Jupyter', 'Scikit-learn', 'Pandas'],
    domain: 'Finance',
    gradient: 'from-slate-600 via-slate-500 to-zinc-500',
    outcomes: [
      'Risk assessment pipeline',
      'Feature importance analysis',
      'Classification model built',
      'Lending decision support',
    ],
    insights: [
      'Identified key features influencing credit risk',
      'Built multiple classification models for comparison',
      'Achieved high accuracy in predicting loan defaults',
      'Provided interpretable results for business stakeholders',
    ],
    approach: [
      'Data Preprocessing: Cleaned and prepared loan application data',
      'Feature Engineering: Created relevant features for credit risk assessment',
      'Model Building: Trained and evaluated multiple classification algorithms',
      'Model Interpretation: Analyzed feature importance for business insights',
    ],
    conclusion: 'The credit risk model provides a reliable tool for assessing loan applicants, helping reduce default rates and improve lending decisions.',
    github: 'https://github.com/atulkumar7810/Credit-Risk-Modeling',
    demo: null,
    powerBiEmbed: null,
    images: [],
    featured: false,
  },
  {
    id: 'sms-spam-classifier',
    title: 'SMS Spam Classifier',
    description: 'NLP-based spam detection system using machine learning. Built text classification model to automatically identify and filter spam messages from legitimate communications.',
    fullDescription: 'Developed an SMS spam classification system using Natural Language Processing techniques. The project involved building a text classification model to automatically identify and filter spam messages, improving communication efficiency.',
    tools: ['Python', 'NLP', 'Jupyter', 'Scikit-learn'],
    domain: 'NLP',
    gradient: 'from-rose-600 via-pink-500 to-fuchsia-500',
    outcomes: [
      'Text preprocessing pipeline',
      'TF-IDF feature extraction',
      'Classification model trained',
      'High accuracy spam detection',
    ],
    insights: [
      'TF-IDF vectorization effectively captures text features',
      'Naive Bayes classifier performs well on text classification',
      'Preprocessing steps significantly impact model accuracy',
      'Model achieves high precision and recall on spam detection',
    ],
    approach: [
      'Data Collection: Gathered SMS dataset with spam and ham labels',
      'Text Preprocessing: Tokenization, stopword removal, and lemmatization',
      'Feature Extraction: Applied TF-IDF vectorization',
      'Model Training: Built and evaluated classification models',
    ],
    conclusion: 'The SMS spam classifier provides an effective automated solution for filtering unwanted messages, improving user experience and communication efficiency.',
    github: 'https://github.com/atulkumar7810/SMS-Spam-Classifier',
    demo: null,
    powerBiEmbed: null,
    images: [],
    featured: false,
  },
  {
    id: 'nlp-data-scraping',
    title: 'NLP Data Scraping',
    description: 'Web scraping project using Python to extract and process text data for NLP applications. Built automated data collection pipelines for text analysis.',
    fullDescription: 'Developed a web scraping system for collecting text data from various online sources. The project focuses on automated data extraction and preprocessing for Natural Language Processing applications.',
    tools: ['Python', 'BeautifulSoup', 'Selenium', 'Pandas'],
    domain: 'NLP',
    gradient: 'from-indigo-600 via-indigo-500 to-blue-500',
    outcomes: [
      'Automated web scraping pipeline',
      'Text data extraction',
      'Data preprocessing for NLP',
      'Structured data output',
    ],
    insights: [
      'Selenium handles dynamic JavaScript-rendered content',
      'BeautifulSoup efficiently parses HTML structures',
      'Proper error handling ensures robust data collection',
      'Data cleaning is crucial for downstream NLP tasks',
    ],
    approach: [
      'Setup: Configured Selenium WebDriver for dynamic content',
      'Scraping: Built scripts to extract text from target websites',
      'Parsing: Used BeautifulSoup to parse HTML and extract relevant data',
      'Storage: Organized extracted data in structured formats',
    ],
    conclusion: 'The scraping system provides a reliable method for collecting text data at scale, enabling various NLP research and applications.',
    github: 'https://github.com/atulkumar7810/NLP_data_scraping',
    demo: null,
    powerBiEmbed: null,
    images: [],
    featured: false,
  },
  {
    id: 'wine-dataset-analysis',
    title: 'Wine Dataset Analysis',
    description: 'Exploratory data analysis and machine learning on wine quality dataset. Built predictive models to classify wine quality based on chemical properties.',
    fullDescription: 'Performed comprehensive exploratory data analysis on the wine quality dataset, examining the relationship between chemical properties and wine quality ratings. Built machine learning models to predict wine quality.',
    tools: ['Python', 'Jupyter', 'Pandas', 'Scikit-learn', 'Matplotlib'],
    domain: 'Data Science',
    gradient: 'from-red-600 via-rose-500 to-orange-500',
    outcomes: [
      'Comprehensive EDA performed',
      'Feature correlation analysis',
      'Quality prediction model',
      'Visualization insights',
    ],
    insights: [
      'Alcohol content strongly correlates with wine quality',
      'Volatile acidity negatively impacts quality ratings',
      'Multiple chemical properties influence overall quality',
      'Classification models effectively predict quality categories',
    ],
    approach: [
      'Data Exploration: Analyzed distributions and relationships between features',
      'Correlation Analysis: Identified key features affecting wine quality',
      'Visualization: Created plots to communicate findings',
      'Model Building: Trained classification models for quality prediction',
    ],
    conclusion: 'The analysis reveals key chemical properties that influence wine quality, providing insights for winemakers to improve their products.',
    github: 'https://github.com/atulkumar7810/Wine_Dataset',
    demo: null,
    powerBiEmbed: null,
    images: [],
    featured: false,
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const filters = ['All', 'SQL', 'Power BI', 'Python', 'FMCG', 'Real Estate', 'Retail', 'Transportation', 'Finance', 'NLP'];
