'use client';
import { motion } from "framer-motion";
import { Award, Star, Trophy, BookOpen, Users, Code, Shield, Zap, Globe } from "lucide-react";

const achievements = {
    certifications: [
        { name: "Full Stack Developer", issuer: "Zetech University", icon: Code, year: "2026" },
        { name: "AWS Certified Security – Specialty", issuer: "Amazon Web Services", year: "2023", icon: Globe },
        { name: "Certified Ethical Hacker (CEH)", issuer: "Try Hack Me", year: "2023", icon: Award }
    ],
    competitions: [
        { name: "Hackthon International Championship", result: "3rd Place", year: "2025", icon: Trophy },
        { name: "Bug Bounty Leaderboard", result: "Top 50 Global", year: "2023", icon: Shield },
        { name: "HackTheBox", result: "Top 1%", year: "2024", icon: Zap },
        { name: "Quadrant", result: "Top 30% Globally", year: "2024", icon: Star }
    ],
    talks: [
        { name: "Securing ML Pipelines in Production", event: "PyCon 2024", location: "Virtual", icon: Users },
        { name: "Automated Vulnerability Management", event: "DevSecOps Days", location: "Berlin", icon: Code }
    ],
    publications: [
        { name: "Zero-Trust API Design Patterns", platform: "Medium / Dev.to", reads: "25K+", icon: BookOpen }
    ]
};

export default function Achievements() {
    return (
        <div className="min-h-screen bg-white-100 dark:bg-gray-900 pt-24 p-8">
            <div className="max-w-6xl mx-auto px-4 fira_code_b6913f4d-module__esm-fG__classNames">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Achievements
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Celebrating milestones in my journey as a security researcher and developer. From certifications to competitions, talks, and publications, these achievements are just the foundation to advancing in the field of cybersecurity and technology.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Award className="w-6 h-6 text-blue-600">
                            Certifications
                        </Award>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {achievements.certifications.map((cert, i) => (
                            <div key={i} className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <cert.icon className="w-8 h-8 text-blue-600 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold">{cert.name}</h3>
                                    <p className="text-sm text-gray-600 darj:text-gray-400">{cert.issuer}.{cert.year}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mb-12"
                >
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Users className="w-6 h-6 text-green-600" /> Talks & Events
                    </h2>
                    <div className="space-y-3">
                        {achievements.talks.map((talk, i) => (
                            <div key={i} className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <talk.icon className="w-6 h-6 text-green-600" />
                                <div>
                                    <h3 className="font-semibold">{talk.name}</h3>
                                    <p className="text-sm text-gray-500">{talk.event} • {talk.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.section>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white text-center"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div>
                            <div className="text-3xl font-bold">10+</div>
                            <div className="text-sm opacity-90">Certifications</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold">3</div>
                            <div className="text-sm opacity-90">CTF Wins</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold">4</div>
                            <div className="text-sm opacity-90">Talks Given</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold">25K+</div>
                            <div className="text-sm opacity-90">Article Reads</div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}