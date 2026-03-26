import { motion } from "framer-motion";
import { CheckCircle2, Zap, Target, BarChart, Users } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";

const features = [
  { icon: Zap, text: "Lighting Fast Results" },
  { icon: Target, text: "Hyper-Targeted Strategies" },
  { icon: BarChart, text: "Transparent Reporting" },
  { icon: Users, text: "Dedicated Account Team" },
];

const stats = [
  { value: 30, label: "Happy Clients", suffix: "+" },
  { value: 5, label: "Yrs Experience", suffix: "+" },
  { value: 98, label: "Satisfaction Rate", suffix: "%" },
  { value: 100, label: "Projects Delivered", suffix: "+" },
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-24 relative bg-card/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              What Makes Us Special
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 leading-[1.1]">
              We Don't Just Market.<br />
              <span className="text-gradient">We Dominate.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Generic strategies get generic results. We build custom, data-backed growth engines designed specifically to crush your competition and scale your revenue.
            </p>

            <ul className="space-y-4 mb-8">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (idx * 0.1) }}
                    className="flex items-center space-x-3 text-gray-200"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <Icon size={16} />
                    </div>
                    <span className="text-foreground font-medium text-lg">{feature.text}</span>
                  </motion.li>
                )
              })}
            </ul>
          </motion.div>

          {/* Right Stats Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 md:p-8 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center glow-hover"
              >
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2 font-display">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
