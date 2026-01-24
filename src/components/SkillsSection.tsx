import { motion } from 'framer-motion';
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
  Layout, 
  FileText, 
  Boxes,
  BrainCircuit,
  TrendingUp
} from 'lucide-react';

const skills = [
  { name: 'SQL', level: 90, icon: Database, category: 'Tools', color: 'from-blue-500 to-cyan-500' },
  { name: 'Advanced Excel', level: 95, icon: FileSpreadsheet, category: 'Tools', color: 'from-green-500 to-emerald-500' },
  { name: 'Power BI', level: 85, icon: BarChart3, category: 'Tools', color: 'from-yellow-500 to-orange-500' },
  { name: 'Python', level: 80, icon: Code, category: 'Tools', color: 'from-blue-600 to-indigo-600' },
  { name: 'Data Cleaning', level: 90, icon: Sparkles, category: 'Skills', color: 'from-purple-500 to-pink-500' },
  { name: 'EDA', level: 85, icon: LineChart, category: 'Skills', color: 'from-teal-500 to-cyan-500' },
  { name: 'Data Visualization', level: 88, icon: PieChart, category: 'Skills', color: 'from-rose-500 to-red-500' },
  { name: 'Dashboard Development', level: 85, icon: Layout, category: 'Skills', color: 'from-indigo-500 to-violet-500' },
  { name: 'Reporting', level: 90, icon: FileText, category: 'Skills', color: 'from-amber-500 to-yellow-500' },
  { name: 'Pandas & NumPy', level: 80, icon: Boxes, category: 'Libraries', color: 'from-sky-500 to-blue-500' },
  { name: 'Business Intelligence', level: 85, icon: TrendingUp, category: 'Domain', color: 'from-emerald-500 to-green-500' },
  { name: 'Machine Learning', level: 65, icon: BrainCircuit, category: 'Advanced', color: 'from-fuchsia-500 to-purple-500' },
];

const categories = ['All', 'Tools', 'Skills', 'Libraries', 'Domain', 'Advanced'];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredSkills = skills.filter(
    skill => activeCategory === 'All' || skill.category === activeCategory
  );

  return (
    <section id="skills" className="section-padding bg-background relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 text-accent rounded-full text-sm font-medium mb-6"
            whileHover={{ scale: 1.02 }}
          >
            <Sparkles className="w-4 h-4" />
            Skills & Expertise
          </motion.span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Technical <span className="text-gradient">Proficiency</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for data analysis, visualization, and business intelligence
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-accent text-accent-foreground shadow-lg shadow-accent/25'
                  : 'bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          layout
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="group"
            >
              <div className={`relative h-full p-6 rounded-2xl bg-card border border-border transition-all duration-500 ${
                hoveredSkill === skill.name ? 'shadow-xl shadow-accent/10 border-accent/30 -translate-y-1' : 'hover:border-border/80'
              }`}>
                {/* Gradient glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div 
                      className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${skill.color} shadow-lg`}
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <skill.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <span className="text-xs font-medium text-muted-foreground bg-secondary/80 px-3 py-1.5 rounded-lg">
                      {skill.category}
                    </span>
                  </div>
                  
                  <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                    {skill.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Libraries */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-muted-foreground mb-6">Also proficient in:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Matplotlib', 'Seaborn', 'BeautifulSoup', 'Scikit-learn', 'Git', 'Jupyter'].map((lib, index) => (
              <motion.span
                key={lib}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-5 py-2.5 bg-card border border-border text-foreground text-sm font-medium rounded-xl hover:border-accent/30 hover:shadow-md transition-all cursor-default"
              >
                {lib}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
