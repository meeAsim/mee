import { Facebook, Instagram, Github } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { Link } from "wouter";
import { Contact } from "@/components/Contact";
import { allProjects } from "@/data/projects";
import CaseStudies  from "@/pages/Casestudies";

const socialLinks = [
  { icon: Facebook, link: "https://www.facebook.com/people/MeeDigital/61562769357063" },
  { icon: Instagram, link: "https://instagram.com/yourusername" },
  { icon: FaTiktok, link: "https://tiktok.com/@yourusername" },
  { icon: Github, link: "https://github.com/meeAsim" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <button onClick={scrollToTop} className="text-3xl font-display font-bold text-foreground  tracking-wide mb-4 text-left">
              Mee<span className="text-primary">.</span>
            </button>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              Your dedicated digital growth startup. We transform ambitious brands into market leaders.
            </p>
            <div className="flex space-x-4">
  {socialLinks.map(({ icon: Icon, link }, i) => (
    <a
      key={i}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all"
    >
      <Icon size={18} />
    </a>
  ))}
</div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-foreground  font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {["Web Development", "App Development", "Digital Marketing", "Social Media", "Video Editing"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-foreground  font-semibold mb-6">Company</h4>
          

          <ul className="space-y-3">
            {[
              { label: "About Us", href: "/about" },
              { label: "Careers", href: "/careers" },
              { label: "Case Studies", href: "/Casestudies" },
              { label: "Blog", href: "/blog" },
              { label: "Contact" }, // no href
            ].map((item) => (
              <li key={item.label}>
                {item.href ? (
                
                  <Link href={item.href}>
                    <span className="text-muted-foreground text-sm hover:text-primary transition-colors cursor-pointer">
                      {item.label}
                    </span>
                  </Link>
                ) : (
                  
                  <button
                    onClick={() =>
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {item.label}
                  </button>
                )}
              </li>
            ))}
          </ul>
          </div>

          <div>
            <h4 className="text-foreground  font-semibold mb-6">Subscribe</h4>
            <p className="text-muted-foreground text-sm mb-4">Get the latest digital marketing trends delivered to your inbox.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-card border border-white/10 rounded-l-lg px-4 py-2 text-sm text-white w-full focus:outline-none focus:border-primary"
              />
              <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-r-lg text-sm font-medium transition-colors">
                Send
              </button>
            </div>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm text-center md:text-left mb-4 md:mb-0">
            © {new Date().getFullYear()} Kopila KO PA Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
