import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { useLocation } from "wouter";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [, navigate] = useLocation();

  const handleGetStarted = () => {
    onClose();
    const isHome = window.location.pathname === "/" || window.location.pathname === import.meta.env.BASE_URL.replace(/\/$/, "") + "/";
    if (!isHome) {
      navigate("/");
      setTimeout(() => {
        document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else {
      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="bg-card border border-border rounded-3xl overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="relative w-full h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {/* <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60`} /> */}
                <div className="absolute inset-0 flex items-end p-6">
                  <div>
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold text-white uppercase tracking-wider border border-white/20">
                      {project.category}
                    </span>
                    <h2 className="text-3xl font-bold text-white mt-2">{project.title}</h2>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Metric badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary font-semibold text-sm mb-6">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  {project.metrics}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  {project.longDescription}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={handleGetStarted}
                    className="flex-1 px-6 py-3 rounded-full text-sm font-medium text-white bg-gradient-to-r from-primary to-accent hover:opacity-90 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group"
                  >
                    Get Started with Similar Project
                    <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                  <button
                    onClick={onClose}
                    className="px-6 py-3 rounded-full text-sm font-medium border border-border text-foreground hover:bg-muted transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
