import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Database, 
  FileSpreadsheet, 
  BarChart3, 
  Code, 
  Sparkles, 
  LineChart, 
  PieChart, 
  TrendingUp
} from 'lucide-react';
import { Card } from '@/components/ui/card';

const skills = [
  { name: 'SQL', icon: Database, description: 'Database querying & management' },
  { name: 'Advanced Excel', icon: FileSpreadsheet, description: 'Pivot tables, VLOOKUP, macros' },
  { name: 'Power BI', icon: BarChart3, description: 'Interactive dashboards & reports' },
  { name: 'Python', icon: Code, description: 'Data analysis & automation' },
  { name: 'Data Cleaning', icon: Sparkles, description: 'Data quality & preparation' },
  { name: 'EDA', icon: LineChart, description: 'Exploratory data analysis' },
  { name: 'Data Visualization', icon: PieChart, description: 'Charts, graphs & insights' },
  { name: 'Business Intelligence', icon: TrendingUp, description: 'Strategic data insights' },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-padding bg-secondary relative overflow-hidden" ref={ref}>
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 text-accent rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Skills & Expertise
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Technical <span className="text-gradient">Proficiency</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Core tools and skills for data analysis and business intelligence
          </p>
        </motion.div>

        {/* Skills Grid - Glassmorphism Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: index * 0.08, duration: 0.4 }}
            >
              <Card className="group relative h-full p-5 md:p-6 bg-card/50 backdrop-blur-xl border-border/40 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 overflow-hidden">
                {/* Glassmorphism gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Glow effect on hover */}
                <div className="absolute -inset-px bg-gradient-to-r from-accent/20 via-transparent to-primary/20 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
                
                <motion.div 
                  className="relative flex flex-col items-center text-center"
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  {/* Icon */}
                  <motion.div 
                    className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center bg-accent/10 border border-accent/20 mb-4 group-hover:bg-accent/20 group-hover:border-accent/40 transition-all duration-300"
                    whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <skill.icon className="w-7 h-7 md:w-8 md:h-8 text-accent" strokeWidth={1.5} />
                  </motion.div>
                  
                  {/* Name */}
                  <h3 className="font-display text-base md:text-lg font-semibold text-foreground mb-1.5 group-hover:text-accent transition-colors duration-300">
                    {skill.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;