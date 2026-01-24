import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Sun, Moon, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';

const ProjectNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Check initial dark mode state
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="container-custom">
        <nav className={`flex items-center justify-between px-4 md:px-6 h-14 md:h-16 rounded-2xl transition-all duration-500 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-xl border border-border shadow-lg'
            : 'bg-background/60 backdrop-blur-md border border-border/50'
        }`}>
          {/* Back Button & Logo */}
          <div className="flex items-center gap-3">
            <motion.button
              onClick={() => navigate('/')}
              className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-xl transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-5 h-5" />
            </motion.button>
            <motion.div
              className="h-6 w-px bg-border"
            />
            <Link
              to="/"
              className="font-display text-xl md:text-2xl font-bold text-foreground relative group"
            >
              ATUL<span className="text-accent">.</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
            </Link>
          </div>

          {/* Desktop CTA & Social */}
          <div className="hidden md:flex items-center gap-2">
            <motion.button
              onClick={() => setIsDark(!isDark)}
              className="p-2.5 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-xl transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
            <a
              href="https://github.com/atulkumar7810"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-xl transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/atulkumar-s/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-xl transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <Button
              asChild
              size="sm"
              className="ml-2 bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/20"
            >
              <Link to="/#projects">All Projects</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <motion.button
              onClick={() => setIsDark(!isDark)}
              className="p-2 text-foreground"
              whileTap={{ scale: 0.95 }}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
            <motion.button
              className="p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border mt-2 mx-4 rounded-2xl overflow-hidden"
          >
            <div className="p-4">
              <div className="flex flex-col gap-2">
                <Button
                  asChild
                  variant="ghost"
                  className="justify-start"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link to="/">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className="justify-start"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link to="/#projects">All Projects</Link>
                </Button>
              </div>
              <div className="flex items-center gap-3 pt-4 mt-4 border-t border-border">
                <a
                  href="https://github.com/atulkumar7810"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary hover:bg-secondary/80 rounded-xl transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/atulkumar-s/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary hover:bg-secondary/80 rounded-xl transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default ProjectNavigation;
