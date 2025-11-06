import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Button from "./Shared/Button";
import d2dIcon from "../assets/images/d2d.png";
import onewayIcon from "../assets/images/oneway.webp";
import cansupportIcon from "../assets/images/cansupport.webp";

const ProjectsSection = () => {
  const projects = [
    {
      title: "D2D Healthcare",
      description:
        "Medicine delivery across Canada with trusted pharmacies, temperature-controlled shipping, real-time tracking, and 24/7 support for essential medications.",
      tech: ["React Native", "Firebase", "JavaScript"],
      image: d2dIcon,
      github: "#",
      demo: "https://play.google.com/store/apps/details?id=com.d2dhealthcare&pcampaignid=web_share",
      appStore: "https://apps.apple.com/in/app/d2d-healthcare/id6749962528",
    },
    {
      title: "One Way",
      description:
        "Connecting senders with available transport space to reduce waste, lower costs, and minimize environmental impact of land transportation.",
      tech: ["React Native", "JavaScript", "Firebase"],
      image: onewayIcon,
      github: "#",
      demo: "https://play.google.com/store/apps/details?id=com.app.oneway",
    },
    {
      title: "Can Support",
      description:
        "Compassionate platform for cancer patients and caregivers offering psychosocial support, transportation, housing, financial aid, and counseling.",
      tech: ["React Native", "JavaScript", "API Integration"],
      image: cansupportIcon,
      github: "#",
      demo: "https://play.google.com/store/apps/details?id=com.cansupport",
    },
    {
      title: "3D Football Game",
      description: "Interactive 3D football game built with Three.js",
      tech: ["Three.js", "React", "WebGL"],
      image: "/api/placeholder/400/250",
      github: "https://github.com/devaamir",
      demo: "/",
    },
  ];

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 font-mono">
            Project Log<span className="text-dark-accent">_</span>
          </h2>
          <p className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in mobile and web
            development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-dark-card rounded-xl overflow-hidden border border-dark-accent/20 hover:border-dark-accent transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <div className="w-full h-40 md:h-48 bg-gradient-to-br from-dark-accent/20 to-dark-purple/20 flex items-center justify-center">
                  {project.image.startsWith("/api/placeholder") ? (
                    <div className="text-3xl md:text-4xl font-bold text-dark-accent opacity-50">
                      {project.title
                        .split(" ")
                        .map((word) => word[0])
                        .join("")}
                    </div>
                  ) : (
                    <img
                      src={project.image}
                      alt={`${project.title} app icon`}
                      className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-2xl"
                    />
                  )}
                </div>
                <div className="absolute inset-0 bg-dark-bg/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
                  <Button variant="outline" size="sm" href={project.demo}>
                    <ExternalLink size={14} className="mr-1 md:w-4 md:h-4" />
                    <span className="text-xs md:text-sm">Play Store</span>
                  </Button>
                  {project.appStore && (
                    <Button
                      variant="secondary"
                      size="sm"
                      href={project.appStore}
                    >
                      <ExternalLink size={14} className="mr-1 md:w-4 md:h-4" />
                      <span className="text-xs md:text-sm">App Store</span>
                    </Button>
                  )}
                </div>
              </div>

              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2 group-hover:text-dark-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base text-text-secondary mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 md:px-3 bg-dark-accent/10 text-dark-accent text-xs md:text-sm rounded-full border border-dark-accent/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
