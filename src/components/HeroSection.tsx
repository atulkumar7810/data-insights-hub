import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Download, Eye, Mail, Github, Linkedin, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';
import heroBg from '@/assets/hero-bg.jpg';
import { useRef } from 'react';

const stats = [
  { label: 'Projects Completed', value: '10+', icon: '📊' },
  { label: 'Tools Mastered', value: '12+', icon: '🛠️' },
  { label: 'Dashboards Built', value: '15+', icon: '📈' },
];

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover scale-110"
        />
        <div 
          className="absolute inset-0"
          style={{ background: 'var(--gradient-hero)' }}
        />
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/30 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Dot Pattern Overlay */}
      <div className="absolute inset-0 dot-pattern opacity-30" />

      {/* Content */}
      <motion.div className="container-custom relative z-10 py-20 md:py-32" style={{ opacity }}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/10 backdrop-blur-md border border-accent/20 text-accent rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Data Analyst | Business Intelligence | MIS
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-[1.1]"
            >
              Hi, I'm{' '}
              <span className="relative inline-block">
                <span className="text-gradient">Atul Kumar</span>
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1.5 rounded-full"
                  style={{ background: 'var(--gradient-accent)' }}
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              An entry-level Data Analyst skilled in SQL, Advanced Excel, Power BI, and Python. 
              Passionate about transforming raw data into actionable insights.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection('#projects')}
                className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 shadow-lg hover:shadow-xl hover:shadow-accent/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Eye className="w-5 h-5" />
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 bg-primary-foreground/5 backdrop-blur-sm text-primary-foreground hover:bg-primary-foreground/10 gap-2 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('#contact')}
                className="border-primary-foreground/20 bg-primary-foreground/5 backdrop-blur-sm text-primary-foreground hover:bg-primary-foreground/10 gap-2 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center lg:justify-start gap-3"
            >
              <motion.a
                href="https://github.com/atulkumar7810"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary-foreground/10 hover:bg-accent backdrop-blur-sm border border-primary-foreground/10 hover:border-accent rounded-xl transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5 text-primary-foreground group-hover:text-accent-foreground transition-colors" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/atulkumar-s78/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary-foreground/10 hover:bg-accent backdrop-blur-sm border border-primary-foreground/10 hover:border-accent rounded-xl transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5 text-primary-foreground group-hover:text-accent-foreground transition-colors" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-accent/30 rounded-full blur-3xl scale-75 animate-pulse" />
              
              {/* Decorative rings */}
              <motion.div
                className="absolute -inset-6 md:-inset-8 border-2 border-dashed border-accent/40 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute -inset-12 md:-inset-16 border border-accent/20 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
              />
              
              {/* Photo container */}
              <motion.div 
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 gradient-border rounded-full" />
                <div className="absolute inset-1 rounded-full overflow-hidden bg-background">
                  <img
                    src={profilePhoto}
                    alt="Atul Kumar - Data Analyst"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-accent/20 via-transparent to-transparent rounded-full" />
              </motion.div>

              {/* Floating stats */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -right-6 top-10 card-glass p-4 rounded-2xl shadow-xl"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-display font-bold text-foreground">10+</div>
                <div className="text-xs text-muted-foreground font-medium">Projects</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -left-6 bottom-20 card-glass p-4 rounded-2xl shadow-xl"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-display font-bold text-foreground">12+</div>
                <div className="text-xs text-muted-foreground font-medium">Tools</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 card-glass px-5 py-3 rounded-full shadow-xl"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-foreground">Open to Work</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 md:mt-24"
        >
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="relative group"
              >
                <div className="card-glass-dark p-4 md:p-6 rounded-2xl text-center hover:bg-primary-foreground/10 transition-all duration-300">
                  <span className="text-2xl md:text-3xl mb-2 block">{stat.icon}</span>
                  <div className="text-2xl md:text-4xl font-display font-bold text-primary-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-primary-foreground/60">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection('#about')}
            className="flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors group"
          >
            <span className="text-xs font-medium uppercase tracking-wider">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="p-2 border border-primary-foreground/20 rounded-full group-hover:border-primary-foreground/40 transition-colors"
            >
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
