import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { DomainTheme } from '@/lib/domain-theme';

interface Props {
  title: string;
  pdfUrl: string;
  theme: DomainTheme;
}

const ProjectDocumentation = ({ title, pdfUrl, theme }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef}>
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2 flex items-center gap-3">
        <BookOpen className={`w-7 h-7 ${theme.accentText}`} />
        Project Documentation
      </h2>
      <p className="text-muted-foreground mb-8 max-w-2xl">
        Detailed documentation covering methodology, analysis, and findings.
      </p>
      <div className={`rounded-2xl overflow-hidden border ${theme.borderAccent} shadow-2xl bg-card relative`}>
        {!isLoaded && (
          <div className="w-full min-h-[600px] md:min-h-[750px] p-8 space-y-6">
            <Skeleton className="h-8 w-1/3" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/6" />
            <Skeleton className="h-64 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        )}
        {isVisible && (
          <motion.iframe
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            title={`${title} Documentation`}
            src={pdfUrl}
            className="w-full min-h-[600px] md:min-h-[750px]"
            allowFullScreen
            onLoad={() => setIsLoaded(true)}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectDocumentation;
