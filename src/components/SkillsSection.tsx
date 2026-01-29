import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Database, 
  FileSpreadsheet, 
  BarChart3, 
  Code, 
  Sparkles, 
  LineChart, 
  PieChart, 
  TrendingUp,
  LucideIcon
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type SkillCategory = 'all' | 'tools' | 'skills' | 'domain';

interface Skill {
  name: string;
  icon: LucideIcon;
  description: string;
  category: SkillCategory[];
}

const skills: Skill[] = [
  { name: 'SQL', icon: Database, description: 'Database querying & management', category: ['tools'] },
  { name: 'Advanced Excel', icon: FileSpreadsheet, description: 'Pivot tables, VLOOKUP, macros', category: ['tools'] },
  { name: 'Power BI', icon: BarChart3, description: 'Interactive dashboards & reports', category: ['tools'] },
  { name: 'Python', icon: Code, description: 'Data analysis & automation', category: ['tools'] },
  { name: 'Data Cleaning', icon: Sparkles, description: 'Data quality & preparation', category: ['skills'] },
  { name: 'EDA', icon: LineChart, description: 'Exploratory data analysis', category: ['skills'] },
  { name: 'Data Visualization', icon: PieChart, description: 'Charts, graphs & insights', category: ['skills'] },
  { name: 'Business Intelligence', icon: TrendingUp, description: 'Strategic data insights', category: ['domain'] },
];

const filterTabs: { label: string; value: SkillCategory }[] = [
  { label: 'All', value: 'all' },
  { label: 'Tools', value: 'tools' },
  { label: 'Skills', value: 'skills' },
  { label: 'Domain', value: 'domain' },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeFilter, setActiveFilter] = useState<SkillCategory>('all');

  const filteredSkills = activeFilter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category.includes(activeFilter));

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
          className="text-center mb-8 md:mb-12"
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

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12"
        >
          {filterTabs.map((tab) => (
            <Button
              key={tab.value}
              variant={activeFilter === tab.value ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveFilter(tab.value)}
              className={`
                relative px-4 md:px-6 py-2 rounded-full font-medium transition-all duration-300
                ${activeFilter === tab.value 
                  ? 'bg-accent text-accent-foreground shadow-lg shadow-accent/25' 
                  : 'bg-card/50 border-border/50 hover:border-accent/50 hover:bg-accent/10'
                }
              `}
            >
              {activeFilter === tab.value && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-accent rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </Button>
          ))}
        </motion.div>

        {/* Skills Grid - Glassmorphism Cards */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.05,
                  layout: { type: 'spring', stiffness: 350, damping: 25 }
                }}
              >
                <Card className="group relative h-full p-5 md:p-6 bg-card border border-border hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-500 overflow-hidden rounded-2xl">
                  {/* Glassmorphism gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Animated glow border */}
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-accent/30 via-primary/20 to-accent/30 rounded-2xl opacity-0 group-hover:opacity-100 blur-[2px] transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-card/80 backdrop-blur-xl rounded-2xl" />
                  
                  <motion.div 
                    className="relative flex flex-col items-center text-center z-10"
                    whileHover={{ y: -6 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    {/* Icon with glow */}
                    <motion.div 
                      className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 mb-4 group-hover:border-accent/60 transition-all duration-300"
                      whileHover={{ rotate: [0, -8, 8, 0], scale: 1.08 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <skill.icon className="relative w-7 h-7 md:w-8 md:h-8 text-accent" strokeWidth={1.5} />
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
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
