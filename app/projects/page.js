'use client';
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Shield, Code, Filter, ExternalLink, Lock, Bot } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";

const projects = [
  {
    slug: "secure-api-gateway",
    title: "Secure API Gateway with Rate Limiting and Threat Detection",
    description: "A robust API gateway with built-in security features like rate limiting, authentication, and threat detection.",
    tags: ["API", "Security", "Node.js", "Python", "Express", "Redis", "Docker"],
    icon: Shield,
    category: "Security",
    github: "https://github.com/Karis-ui/secure-api-gateway",
    demo: "https://demo.api-gateway.com",
    metrics: {
      performance: "10,000 req/s",
      latency: "<15ms overhead",
      uptime: "99.9%",
      securityRating: "A+"
    },
    challenges: [
      "Implementing efficient rate limiting without impacting performance",
      "Integrating multiple authentication methods (JWT, OAuth2, API keys)",
      "Real-time interference at scale with minimal latency",
      "Memory optimization for handling large volumes of requests"
    ],
    solutions: [
      "Utilized Redis for distributed rate limiting to ensure high performance",
      "Implemented a modular authentication system supporting JWT, OAuth2, and API keys",
      "Developed a lightweight interference engine using machine learning for real-time threat detection",
      "Optimized memory usage by implementing efficient data structures and caching strategies",
    ],
    year: "2026"
  },
  {
    slug: "vul-scanner-automator",
    title: "AutomatedVulnerability Scanner",
    description: "An automated vulnerability scanning tool for identifying and mitigating security risks in systems with implementation steps.",
    tags: ["Security", "Automation", "Python", "Scanning", "GitHub Actions", "Docker"],
    icon: Bot,
    category: "Automation",
    github: "https://github.com/Karis-ui/vul-scanner",
    demo: null,
    metrics: {
      coverage: "1,200+ vulnerabilities tracked",
      time: "45 min saved daily",
      scans: "500+ scans/month"
    },
    year: "2026"
  },
  {
    slug: "AI-fraud-detection",
    title: "ML Model Security hardening",
    description: "Production fraud detection system using machine learning to identify and prevent fraudulent activities in real-time with adversarial defenses.",
    tags: ["API", "Security", "Node.js", "Python", "Express", "Redis", "Docker"],
    icon: Lock,
    category: "ML",
    github: "https://github.com/Karis-ui/ml-secure-deploy",
    demo: "https://demo.fraud-detection.com",
    metrics: {
      accuracy: "96.8% fraud detection rate",
      latency: "<50ms interference overhead",
      uptime: "99.9% SLA"
    },
    year: "2026"
  }
];

const categories = ['all', 'Security', 'Automation', 'ML'];

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Building secure, intelligent systems that bridge creativity and technology. Explore my latest projects in security, automation, and machine learning.
          </p>

          <div className="flex justify-center gap-3 mt-8">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full capitalize transition ${filter === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link href={`/projects/${project.slug}`}>
                <div className="h-full bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 cursor-pointer group">
                  <div className="p-6">
                    <project.icon className="w-10 h-10 text-blue-600 mb-4" />
                    <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition">
                      {project.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-xs px-2 py-1 text-gray-500">+{project.tags.length - 3}</span>
                      )}
                    </div>
                    <div className="flex items-center justify-between border-t border-gray-200 dark:border-gray-700 pt-4 mt-2">
                      <span className="text-sm text-gray-500">{project.year}</span>
                      <div className="flex gap-3">
                        <Github className="w-4 h-4 text-gray-500 hover:text-blue-600" />
                        <ExternalLink className="w-4 h-4 text-gray-500 hover:text-blue-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}