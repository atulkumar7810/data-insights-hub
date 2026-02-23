/**
 * Category-based theme color system.
 * Maps project domains to consistent gradient + accent color tokens.
 */

export interface DomainTheme {
  /** Tailwind gradient classes for backgrounds */
  gradient: string;
  /** HSL accent color for icons, borders, glows */
  accentHsl: string;
  /** Tailwind text color for accent elements */
  accentText: string;
  /** Tailwind bg color for subtle tints */
  accentBg: string;
  /** Box-shadow glow string */
  glow: string;
  /** Border accent class */
  borderAccent: string;
}

const themes: Record<string, DomainTheme> = {
  FMCG: {
    gradient: 'from-blue-600 via-cyan-500 to-sky-400',
    accentHsl: '195 80% 50%',
    accentText: 'text-cyan-400',
    accentBg: 'bg-cyan-500/10',
    glow: '0 0 40px hsl(195 80% 50% / 0.3)',
    borderAccent: 'border-cyan-500/30',
  },
  Transportation: {
    gradient: 'from-amber-500 via-orange-500 to-yellow-400',
    accentHsl: '30 90% 55%',
    accentText: 'text-orange-400',
    accentBg: 'bg-orange-500/10',
    glow: '0 0 40px hsl(30 90% 55% / 0.3)',
    borderAccent: 'border-orange-500/30',
  },
  'Real Estate': {
    gradient: 'from-emerald-600 via-emerald-500 to-teal-400',
    accentHsl: '160 60% 45%',
    accentText: 'text-emerald-400',
    accentBg: 'bg-emerald-500/10',
    glow: '0 0 40px hsl(160 60% 45% / 0.3)',
    borderAccent: 'border-emerald-500/30',
  },
  'Business Intelligence': {
    gradient: 'from-indigo-600 via-blue-500 to-violet-500',
    accentHsl: '230 70% 60%',
    accentText: 'text-indigo-400',
    accentBg: 'bg-indigo-500/10',
    glow: '0 0 40px hsl(230 70% 60% / 0.3)',
    borderAccent: 'border-indigo-500/30',
  },
};

// Fallback
const defaultTheme: DomainTheme = {
  gradient: 'from-violet-600 via-purple-500 to-indigo-500',
  accentHsl: '270 60% 60%',
  accentText: 'text-purple-400',
  accentBg: 'bg-purple-500/10',
  glow: '0 0 40px hsl(270 60% 60% / 0.3)',
  borderAccent: 'border-purple-500/30',
};

export function getDomainTheme(domain: string): DomainTheme {
  return themes[domain] ?? defaultTheme;
}
