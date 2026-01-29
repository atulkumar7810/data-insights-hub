import { motion } from 'framer-motion';
import { ArrowDown, Download, Eye, Github, Linkedin, MapPin, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';
import { useRef, useState, useEffect } from 'react';

// Typing animation hook
const useTypingEffect = (text: string, speed: number = 50, delay: number = 500) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    // Initial delay before starting
    timeout = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          setIsComplete(true);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return { displayedText, isComplete };
};

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { displayedText, isComplete } = useTypingEffect(
    "Turning data into business insights.",
    60,
    800
  );

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" ref={containerRef} className="relative min-h-[90vh] flex items-center bg-background">
      <div className="container-custom relative z-10 py-20 pt-24 md:py-28 md:pt-32">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-center">
          
          {/* LEFT SIDE - Content (stacked vertically) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full lg:w-1/2 order-2 lg:order-1"
          >
            <div className="relative z-10">
              {/* Name */}
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
                Atul Kumar
              </h1>

              {/* Role */}
              <div className="flex items-center gap-2 text-accent font-medium text-lg mb-2">
                <Briefcase className="w-5 h-5" />
                <span>Data Analyst</span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-5">
                <MapPin className="w-4 h-4" />
                <span>India</span>
              </div>

              {/* Tagline with typing effect */}
              <div className="relative mb-6">
                <div className="w-12 h-0.5 bg-gradient-to-r from-accent to-transparent mb-4" />
                <p className="text-accent text-lg md:text-xl font-medium mb-4 min-h-[2rem]">
                  "{displayedText}
                  <span className={`inline-block w-0.5 h-5 bg-accent ml-1 ${isComplete ? 'opacity-0' : 'animate-pulse'}`} />
                  "
                </p>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-lg">
                  Entry-level Data Analyst skilled in SQL, Advanced Excel, Power BI, and Python. 
                  I turn raw data into actionable insights through clean analysis, smart dashboards, 
                  and business-focused storytelling.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 mb-6">
                <motion.a 
                  href="https://github.com/atulkumar7810" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-secondary hover:bg-accent/20 border border-border hover:border-accent/40 transition-all duration-300"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5 text-foreground" />
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/atulkumar-s/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-secondary hover:bg-accent/20 border border-border hover:border-accent/40 transition-all duration-300"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-5 h-5 text-foreground" />
                </motion.a>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={() => scrollToSection('#projects')}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
                >
                  <Eye className="w-4 h-4" />
                  View Projects
                </Button>
                <a href="/Resume.pdf" download>
                  <Button
                    variant="outline"
                    className="w-full border-border bg-secondary text-foreground hover:bg-accent/10 gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Resume
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div 
                className="relative w-44 h-44 md:w-56 md:h-56 lg:w-64 lg:h-64"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Animated gradient border ring */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-profile-glow via-accent to-profile-glow-alt opacity-75 blur-sm animate-spin" style={{ animationDuration: '6s' }} />
                <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-profile-glow via-profile-glow-alt to-accent opacity-90" style={{ animation: 'spin 4s linear infinite reverse' }} />
                
                {/* Outer glow effect */}
                <div className="absolute -inset-3 bg-gradient-to-r from-profile-glow/30 via-accent/20 to-profile-glow-alt/30 rounded-full blur-xl opacity-60" />
                
                {/* Inner image container */}
                <div className="relative w-full h-full rounded-full overflow-hidden ring-2 ring-background shadow-lg">
                  <img src={profilePhoto} alt="Atul Kumar" className="w-full h-full object-cover" />
                </div>
                
                {/* Status indicator */}
                <div className="absolute bottom-3 right-3 w-5 h-5 bg-accent rounded-full border-2 border-background shadow-md" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2"
        >
          <button 
            onClick={() => scrollToSection('#about')} 
            className="text-muted-foreground p-2 hover:text-foreground transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
