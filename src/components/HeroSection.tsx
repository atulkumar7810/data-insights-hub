import { motion } from 'framer-motion';
import { ArrowDown, Download, Eye, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';
import heroBg from '@/assets/hero-bg.jpg';

const stats = [
  { label: 'Projects Completed', value: '10+' },
  { label: 'Tools Mastered', value: '12+' },
  { label: 'Dashboards Built', value: '15+' },
];

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0"
          style={{ background: 'var(--gradient-hero)' }}
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-20 md:py-32">
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
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium backdrop-blur-sm">
                Data Analyst | Business Intelligence | MIS
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
            >
              Hi, I'm{' '}
              <span className="relative">
                <span className="text-gradient">Atul Kumar</span>
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-accent rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              An entry-level Data Analyst skilled in SQL, Advanced Excel, Power BI, and Python. 
              Passionate about transforming raw data into actionable insights to support data-driven decision-making.
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
                className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
              >
                <Eye className="w-5 h-5" />
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('#contact')}
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2"
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
              className="flex justify-center lg:justify-start gap-4"
            >
              <a
                href="https://github.com/atulkumar7810"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full transition-colors"
              >
                <Github className="w-5 h-5 text-primary-foreground" />
              </a>
              <a
                href="https://www.linkedin.com/in/atulkumar-s78/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full transition-colors"
              >
                <Linkedin className="w-5 h-5 text-primary-foreground" />
              </a>
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
              {/* Decorative rings */}
              <motion.div
                className="absolute -inset-4 md:-inset-6 border-2 border-accent/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute -inset-8 md:-inset-12 border border-accent/20 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />
              
              {/* Photo container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent shadow-2xl">
                <img
                  src={profilePhoto}
                  alt="Atul Kumar - Data Analyst"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>

              {/* Floating stats */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute -right-4 top-8 bg-background/95 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-border"
              >
                <div className="text-2xl font-bold text-foreground">10+</div>
                <div className="text-xs text-muted-foreground">Projects</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -left-4 bottom-16 bg-background/95 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-border"
              >
                <div className="text-2xl font-bold text-foreground">12+</div>
                <div className="text-xs text-muted-foreground">Tools</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Animated Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 md:mt-24"
        >
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/70">{stat.label}</div>
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
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="p-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
