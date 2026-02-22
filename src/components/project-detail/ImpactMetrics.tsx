import { motion } from 'framer-motion';
import { TrendingUp, Clock, BarChart3 } from 'lucide-react';
import { Project } from '@/data/projects';

interface Props {
  project: Project;
}

/**
 * Extracts up to 3 highlight metrics from project outcomes/insights.
 * Uses simple heuristics to find percentage or numeric values.
 */
function extractMetrics(project: Project) {
  const allText = [...project.outcomes, ...project.insights];
  const metrics: { label: string; value: string; icon: React.ReactNode }[] = [];
  const icons = [
    <TrendingUp key="t" className="w-6 h-6" />,
    <Clock key="c" className="w-6 h-6" />,
    <BarChart3 key="b" className="w-6 h-6" />,
  ];

  for (const text of allText) {
    if (metrics.length >= 3) break;
    // Match patterns like "29%", "50,000+", "90%", "3,000+"
    const match = text.match(/(\d[\d,.]*[+%]?%?)/);
    if (match) {
      metrics.push({
        value: match[1],
        label: text.replace(match[1], '').trim().replace(/^[-–—•]\s*/, ''),
        icon: icons[metrics.length],
      });
    }
  }

  // Fallback if we couldn't extract enough
  while (metrics.length < 3 && metrics.length < project.outcomes.length) {
    const outcome = project.outcomes[metrics.length];
    metrics.push({
      value: `#${metrics.length + 1}`,
      label: outcome,
      icon: icons[metrics.length],
    });
  }

  return metrics;
}

const ImpactMetrics = ({ project }: Props) => {
  const metrics = extractMetrics(project);

  if (metrics.length === 0) return null;

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-2xl border border-border/50 bg-card p-8 shadow-lg`}
            >
              {/* Subtle gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent`} />
              <div className="relative z-10">
                <div className="text-accent mb-4">{metric.icon}</div>
                <p className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {metric.value}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {metric.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
