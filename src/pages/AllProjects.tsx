import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowUpRight, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useLocation } from "wouter";
import { allProjects } from "@/data/projects";
import { ProjectModal } from "@/components/ProjectModal";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import type { Project } from "@/data/projects";

const ITEMS_PER_PAGE = 6;

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08 },
  }),
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

export default function AllProjects() {
  const [, navigate] = useLocation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(allProjects.length / ITEMS_PER_PAGE);
  const paginated = allProjects.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const goToPage = (p: number) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-background text-foreground min-h-screen font-sans">
      <Navbar />
      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>

          <span className="block text-primary font-semibold tracking-wider uppercase text-sm mb-3">
            Our Portfolio
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            All Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Every project is a story of growth. Browse our full portfolio of real results, real strategies, and real impact.
          </p>
        </motion.div>

        {/* Page indicator */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-sm text-muted-foreground">
            Showing <span className="text-foreground font-semibold">{(page - 1) * ITEMS_PER_PAGE + 1}–{Math.min(page * ITEMS_PER_PAGE, allProjects.length)}</span> of <span className="text-foreground font-semibold">{allProjects.length}</span> projects
          </p>
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i + 1)}
                className={`w-8 h-8 rounded-full text-sm font-medium transition-all ${
                  page === i + 1
                    ? "bg-primary text-white"
                    : "bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {paginated.map((project, index) => (
              <motion.div
                key={project.id}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer"
              >
                <div className="rounded-3xl overflow-hidden relative bg-card border border-border hover:border-primary/40 transition-all duration-300 shadow-lg hover:shadow-primary/20 hover:shadow-xl h-full">
                  {/* Image */}
                  <div className="relative w-full h-52 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-70`} />
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <ExternalLink className="text-white" size={18} />
                    </div>
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-xs font-semibold text-white uppercase tracking-wider border border-white/20">
                      {project.category}
                    </span>
                  </div>

                  {/* Card body */}
                  <div className="p-6 flex flex-col items-center text-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary font-semibold text-xs mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      {project.metrics}
                    </span>

                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    <div className="mt-4 flex items-center gap-1.5 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Case Study <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination Controls */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-4 mt-16"
        >
          <button
            onClick={() => goToPage(page - 1)}
            disabled={page === 1}
            className="w-11 h-11 rounded-full flex items-center justify-center bg-card border border-border text-foreground hover:border-primary/50 hover:text-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i + 1)}
                className={`w-11 h-11 rounded-full text-sm font-semibold transition-all ${
                  page === i + 1
                    ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30"
                    : "bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => goToPage(page + 1)}
            disabled={page === totalPages}
            className="w-11 h-11 rounded-full flex items-center justify-center bg-card border border-border text-foreground hover:border-primary/50 hover:text-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight size={20} />
          </button>
        </motion.div>
      </main>

      <Footer />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
