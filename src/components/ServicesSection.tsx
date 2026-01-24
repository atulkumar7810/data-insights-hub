import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  BarChart3, 
  FileText, 
  Layout, 
  Sparkles, 
  Search, 
  TrendingUp,
  BrainCircuit,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: BarChart3,
    title: 'Data Analysis & Business Insights',
    description: 'Transform raw data into actionable insights using advanced analytical techniques to drive strategic business decisions.',
  },
  {
    icon: FileText,
    title: 'MIS Reporting & Automation',
    description: 'Develop automated MIS reports that streamline operations and provide real-time visibility into key business metrics.',
  },
  {
    icon: Layout,
    title: 'Power BI Dashboard Development',
    description: 'Create interactive, visually compelling dashboards that make complex data accessible and actionable.',
  },
  {
    icon: Sparkles,
    title: 'Data Cleaning & Preparation',
    description: 'Ensure data quality through thorough cleaning, validation, and transformation processes.',
  },
  {
    icon: Search,
    title: 'Exploratory Data Analysis',
    description: 'Uncover hidden patterns, trends, and relationships in your data through comprehensive EDA.',
  },
  {
    icon: TrendingUp,
    title: 'Business Intelligence Solutions',
    description: 'End-to-end BI solutions that help organizations make data-driven decisions at every level.',
  },
  {
    icon: BrainCircuit,
    title: 'Basic Predictive Modeling',
    description: 'Leverage machine learning techniques to build predictive models for forecasting and optimization.',
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="section-padding bg-secondary" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What I Can Do For You
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive data analytics services to help your business thrive
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="card-elevated h-full p-8 rounded-xl hover:shadow-lg transition-all duration-300 border border-transparent hover:border-accent/20">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-2 text-accent font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
