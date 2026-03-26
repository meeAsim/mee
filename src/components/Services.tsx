import { motion } from "framer-motion";
import { Megaphone, Users, Target, Video, Code, Smartphone, Database } from "lucide-react";

const services = [
  {
    title: "Digital Ads & Marketing",
    description: "Data-driven ad campaigns that maximize ROI and drive high-quality leads to your business.",
    icon: Megaphone,
  },
  {
    title: "Social Media Management",
    description: "Engaging content and community management to build loyal followings across platforms.",
    icon: Users,
  },
  {
    title: "Social Media Ads",
    description: "Hyper-targeted social ad strategies on FB, IG, and TikTok that convert scrollers into buyers.",
    icon: Target,
  },
  {
    title: "Photo & Video Editing",
    description: "Stunning visual assets, reels, and product videos designed to capture attention instantly.",
    icon: Video,
  },
  {
    title: "Web Development",
    description: "High-performance, SEO-optimized websites that serve as your brand's ultimate digital storefront.",
    icon: Code,
  },
  {
    title: "App Development",
    description: "Intuitive and powerful mobile applications for iOS and Android that users love.",
    icon: Smartphone,
  },
  {
    title: "Data Collection & Analysis",
    description: "Deep analytics and reporting to continuously refine strategies and scale operations.",
    icon: Database,
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-wider uppercase text-sm"
          >
            What We Do
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mt-4 mb-6"
          >
            Our Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            End-to-end digital solutions powering your brand's growth and online presence. We handle the tech so you can focus on the business.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-card p-8 rounded-2xl border border-white/5 glow-hover group relative overflow-hidden"
              >
                {/* Subtle gradient blob on hover */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
        
      </div>
    </section>
  );
}
