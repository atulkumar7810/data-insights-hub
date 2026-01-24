import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  BarChart3, 
  FileText, 
  Layout, 
  Sparkles, 
  Search, 
  TrendingUp,
  BrainCircuit,
  ArrowRight,
  Zap
} from 'lucide-react';

const services = [
  {
    icon: BarChart3,
    title: 'Data Analysis & Business Insights',
    description: 'Transform raw data into actionable insights using advanced analytical techniques to drive strategic business decisions.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: FileText,
    title: 'MIS Reporting & Automation',
    description: 'Develop automated MIS reports that streamline operations and provide real-time visibility into key business metrics.',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Layout,
    title: 'Power BI Dashboard Development',
    description: 'Create interactive, visually compelling dashboards that make complex data accessible and actionable.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Sparkles,
    title: 'Data Cleaning & Preparation',
    description: 'Ensure data quality through thorough cleaning, validation, and transformation processes.',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: Search,
    title: 'Exploratory Data Analysis',
    description: 'Uncover hidden patterns, trends, and relationships in your data through comprehensive EDA.',
    gradient: 'from-rose-500 to-red-500',
  },
  {
    icon: TrendingUp,
    title: 'Business Intelligence Solutions',
    description: 'End-to-end BI solutions that help organizations make data-driven decisions at every level.',
    gradient: 'from-indigo-500 to-violet-500',
  },
  {
    icon: BrainCircuit,
    title: 'Basic Predictive Modeling',
    description: 'Leverage machine learning techniques to build predictive models for forecasting and optimization.',
    gradient: 'from-fuchsia-500 to-purple-500',
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section id="services" className="section-padding bg-secondary/30 relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 text-accent rounded-full text-sm font-medium mb-6"
            whileHover={{ scale: 1.02 }}
          >
            <Zap className="w-4 h-4" />
            Services
          </motion.span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What I Can <span className="text-gradient">Do For You</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive data analytics services to help your business thrive
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              className="group relative"
            >
              <div className={`h-full p-8 rounded-2xl bg-card border border-border transition-all duration-500 ${
                hoveredService === index ? 'shadow-2xl shadow-accent/10 border-accent/30 -translate-y-2' : 'hover:border-border/80'
              }`}>
                {/* Gradient glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
                
                <div className="relative">
                  {/* Icon */}
                  <motion.div 
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${service.gradient} shadow-lg mb-6`}
                    whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </motion.div>
                  
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <motion.div
                    className="flex items-center gap-2 text-accent font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
                    initial={{ x: -10 }}
                    animate={hoveredService === index ? { x: 0 } : { x: -10 }}
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>

                {/* Corner accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-bl-[100px] rounded-tr-2xl transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
