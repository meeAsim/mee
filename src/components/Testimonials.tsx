import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "From web development to data analytics, Mee handles it all seamlessly. They're not just an agency — they're a growth partner.",
    author: "Drona Karki",
    title: "Managing Director",
    company: "Dream Education",
  },
  {
    quote: "Our ROAS increased by 150% within the first two months. Their approach to social media ads is surgical and incredibly effective.",
    author: "Binod Nepali",
    title: "Marketing Manager",
    company: "Thunche.com",
  },
  {
    quote: "The brand refresh and new website completely transformed how our enterprise clients perceive us. Absolute professionals.",
    author: "Dr. Dharmendra Kumar Shah",
    title: "CEO",
    company: "DRB News Netwok",
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-[500px] -translate-y-1/2 bg-primary/5 blur-[120px] pointer-events-none -z-10" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-primary font-semibold tracking-wider uppercase text-sm"
        >
          Client Love
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mt-4 mb-16"
        >
          What Our Clients Say
        </motion.h2>

        <div className="relative min-h-[300px] flex flex-col items-center justify-center">
          <Quote className="text-primary/20 w-24 h-24 absolute -top-10 -z-10" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              <p className="text-2xl md:text-4xl font-display font-medium leading-tight md:leading-tight text-primary
               mb-10">
                "{testimonials[currentIndex].quote}"
              </p>
              
              <div className="flex flex-col items-center">
                <h4 className="text-xl font-bold text-white">{testimonials[currentIndex].author}</h4>
                <p className="text-primary mt-1">
                  {testimonials[currentIndex].title} <span className="text-muted-foreground">@ {testimonials[currentIndex].company}</span>
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button 
            onClick={prev}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-all"
          >
            <ChevronLeft className="text-white" />
          </button>
          
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "bg-primary w-8" : "bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <button 
            onClick={next}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-all"
          >
            <ChevronRight className="text-white" />
          </button>
        </div>

      </div>
    </section>
  );
}
