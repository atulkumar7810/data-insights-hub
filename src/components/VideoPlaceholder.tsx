import { motion } from 'framer-motion';
import { Play, Video } from 'lucide-react';

const VideoPlaceholder = () => {
  return (
    <section className="py-12 md:py-16 bg-secondary/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg"
        >
          <div className="flex flex-col items-center text-center">
            {/* Video Icon Container */}
            <div className="relative mb-6">
              <div className="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center">
                <Video className="w-10 h-10 text-accent" />
              </div>
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center backdrop-blur-sm">
                  <Play className="w-5 h-5 text-accent ml-0.5" />
                </div>
              </div>
            </div>

            {/* Title */}
            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
              🎥 Project Walkthrough Video
            </h3>

            {/* Subtext */}
            <p className="text-muted-foreground text-sm md:text-base">
              Coming Soon
            </p>

            {/* Decorative border */}
            <div className="mt-6 w-full max-w-md h-48 rounded-xl border-2 border-dashed border-border/50 flex items-center justify-center bg-secondary/20">
              <div className="text-muted-foreground/50 text-sm flex flex-col items-center gap-2">
                <Play className="w-8 h-8" />
                <span>Video will appear here</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoPlaceholder;
