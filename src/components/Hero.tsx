import { motion } from "framer-motion";
import { AnimatedCounter } from "./AnimatedCounter";

const stats = [
  { value: 30, label: "Happy Clients", suffix: "+" },
  { value: 5, label: "Yrs Experience", suffix: "+" },
  { value: 98, label: "Satisfaction Rate", suffix: "%" },
  { value: 100, label: "Projects Delivered", suffix: "+" },
];

export function Hero() {
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-accent/20 rounded-full blur-[150px] animate-float-delayed mix-blend-screen pointer-events-none" />
        <img 
          src="/images/hero-bg-glow.png"
          alt="Abstract Background" 
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
          <span className="text-sm font-medium text-gray-300">Your Digital Growth Startup</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white max-w-5xl leading-[1.1] md:leading-[1.1]"
        >
          Grow Your Brand. <br className="hidden md:block" />
          <span className="text-gradient">Rule the Digital World.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          We craft digital marketing strategies, stunning content, and powerful web & app experiences that turn your audience into loyal customers.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button 
            onClick={() => scrollToSection("#contact")}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold text-white bg-gradient-to-r from-primary to-accent shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300"
          >
            Get Started Free
          </button>
          <button 
            onClick={() => scrollToSection("#services")}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
          >
            Explore Services
          </button>
        </motion.div>

        {/* Stats Row */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full max-w-4xl mx-auto pt-10 border-t border-white/10"
        >
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-display">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider text-center">{stat.label}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
