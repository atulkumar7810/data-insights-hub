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
  showCode?: boolean; // 👈 NEW FIELD
}

export const projects: Project[] = [
  {
    id: 'atliq-mart-analysis',
    title: 'AtliQ Mart Sales Analysis',
    description: 'Comprehensive FMCG sales analysis with 50,000+ records using Power BI to track KPIs, revenue trends, and product performance.',
    fullDescription: 'This project analyzes AtliQ Mart’s supply chain and sales performance using OT%, IF%, and OTIF metrics to identify inefficiencies and optimize operations.',
    tools: ['Power BI', 'Excel', 'SQL'],
    domain: 'FMCG',
    gradient: 'from-blue-600 via-blue-500 to-cyan-500',
    outcomes: [
      'Analyzed 50,000+ sales records',
      'Built interactive KPI dashboards',
      'Identified key revenue drivers',
      'Created management-level reports'
    ],
    insights: [
      'OTIF performance critically low at 29%',
      'On-time delivery only 59%',
      'High backorder rate affecting customer loyalty',
      'Line fill rate significantly lower than volume fill rate'
    ],
    approach: [
      'KPI Modeling using DAX',
      'City-wise performance breakdown',
      'Trend analysis on service levels',
      'Dashboard optimization for management'
    ],
    conclusion: 'Optimizing supplier lead times and implementing AI forecasting can significantly improve fulfillment efficiency.',
    github: 'https://github.com/atulkumar7810/AtliQ_Mart-Analysis',
    demo: 'atliq-mart-analysis/demo',
    powerBiEmbed: 'https://app.powerbi.com/view?r=eyJrIjoiMjc0OGQ2NDYtMTY2Zi00YTRhLTg2NDgtYjEzNjlkNjMyOTQwIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9',
    images: [
      'https://atulkumar7810.github.io/my_portfolio_website/packages/images/portfolio%20project/AtliQ_Mart.png'
    ],
    featured: true,
    showCode: true
  },

  {
    id: 'goodcabs-analysis',
    title: 'GoodCabs Performance Analysis',
    description: 'Transportation analytics project analyzing tier-2 city cab operations to improve growth and efficiency.',
    fullDescription: 'Evaluated GoodCabs performance using Snowflake schema modeling and KPIs like trip volume, satisfaction, and repeat rates.',
    tools: ['SQL', 'Power BI', 'Excel'],
    domain: 'Transportation',
    gradient: 'from-amber-500 via-orange-500 to-red-500',
    outcomes: [
      'Identified top revenue cities',
      'Analyzed demand seasonality',
      'Improved customer retention insights'
    ],
    insights: [
      'Tourism cities outperform business hubs',
      'High repeat rates in Surat',
      'Seasonal demand spikes identified'
    ],
    approach: [
      'Snowflake schema modeling',
      'Trip trend analysis',
      'Revenue vs satisfaction mapping'
    ],
    conclusion: 'Targeted loyalty programs and dynamic pricing can enhance market performance.',
    github: 'https://github.com/atulkumar7810/GoodCabs-Analysis',
    demo: 'goodcabs-analysis/demo',
    powerBiEmbed: 'https://app.powerbi.com/view?r=eyJrIjoiNjA2ZTc5ZjgtZjNjZi00MjQ5LTg3OTQtY2YwNGUxZDIzM2Q3IiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9',
    images: [
      'https://atulkumar7810.github.io/my_portfolio_website/packages/images/goodcabs_image/main_image.png'
    ],
    featured: true,
    showCode: true
  },

  {
    id: 'gurgaon-real-estate',
    title: 'Gurgaon Real Estate Analysis',
    description: 'End-to-end data science project with scraping, EDA, and ML-based price prediction deployed via Streamlit.',
    fullDescription: 'Built a property intelligence platform using 3,000+ listings for Gurgaon with recommendations and pricing predictions.',
    tools: ['Python', 'Scikit-learn', 'Streamlit', 'Pandas', 'NumPy'],
    domain: 'Real Estate',
    gradient: 'from-emerald-600 via-emerald-500 to-teal-500',
    outcomes: [
      'Scraped 3,000+ property records',
      'Achieved 90% price prediction accuracy',
      'Built recommendation system',
      'Deployed live Streamlit app'
    ],
    insights: [
      'Location and amenities strongly influence prices',
      'Area-wise pricing gaps identified',
      'Reduced search time by 30%'
    ],
    approach: [
      'Web scraping using Selenium & BS4',
      'Feature engineering and EDA',
      'ML modeling',
      'Deployment on AWS EC2'
    ],
    conclusion: 'Enabled smarter property buying decisions with AI-powered insights.',
    github: 'https://github.com/atulkumar7810/Gurgaon_Housing_Market_Analysis',
    demo: 'https://gurgaonhousingmarketanalysis-lrucnaqwthf3lrubhanwxa.streamlit.app/',
    powerBiEmbed: null,
    images: [
      'https://atulkumar7810.github.io/my_portfolio_website/packages/images/portfolio%20project/Gurgaon_analysis_report.jpg'
    ],
    featured: true,
    showCode: true
  },

  {
    id: 'business-insight-360',
    title: 'Business Insight 360',
    description: 'Enterprise Power BI solution delivering Finance, Sales, Marketing, Supply Chain & Executive analytics.',
    fullDescription: 'Business Insight 360 provides leadership with a unified performance tracking platform across departments with real-time KPIs and strategic insights.',
    tools: ['Power BI', 'DAX', 'SQL', 'Excel'],
    domain: 'Business Intelligence',
    gradient: 'from-orange-600 via-amber-500 to-yellow-400',
    outcomes: [
      'Built 5 role-based dashboards',
      'Centralized enterprise analytics',
      'Improved strategic visibility',
      'Delivered executive-ready BI system'
    ],
    insights: [
      'Net Sales reached $4.97B with GM 37.83%',
      'Net Profit dropped -11.64%',
      'Forecast accuracy achieved 79.83%',
      'Top customers & products identified',
      'Supply chain risks highlighted'
    ],
    approach: [
      'Star schema data modeling',
      'DAX-based KPI creation',
      'Drill-through & interactivity',
      'UX-focused dashboard design'
    ],
    conclusion: 'Business Insight 360 empowers faster and data-driven executive decisions across the enterprise.',
    github: null,
    demo: 'project/business-insight-360/demo',
    powerBiEmbed: 'https://app.powerbi.com/view?r=eyJrIjoiODY0NzEyNjctN2Q2Mi00ZTAyLWI0YmEtMjMyNjEyMDE5MjM3IiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9&pageName=7e3b0a247184c220035e',
    images: [],
    featured: true,
    showCode: false // ❌ Code button disabled ONLY here
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const filters = [
  'All',
  'SQL',
  'Power BI',
  'Python',
  'FMCG',
  'Real Estate',
  'Transportation',
  'Business Intelligence'
];
