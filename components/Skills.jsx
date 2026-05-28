'use client';

import { color, motion } from 'framer-motion';
import { useState } from 'react';
import { Code, Brain, Cloud, Shield, Database, Terminal, Lock, Zap, Server, GitBranch, icons } from 'lucide-react';

export default function Skills() {
    const [hoverSkill, setHoverSkill] = useState(null);
    const skillCategories = [
        {
            name: "Development",
            icon: Code,
            color: "blue",
            skills: [
                { name: "Python", level: 90, years: 5, icon: "🐍" },
                { name: "JavaScript/React", level: 85, years: 4, icon: "⚛️" },
                { name: "Go", level: 75, years: 3, icon: "🔵" },
                { name: "Node.js", level: 80, years: 4, icon: "🟢" },
                { name: "TypeScript", level: 80, years: 2, icon: "📘" },
                { name: "TailsWind/CSS", level: 60, years: 1, icon: "" }
            ]
        },
        {
            name: "CyberSecurity",
            icon: Shield,
            color: "red",
            skills: [
                { name: "Penetration Testing", level: 70, years: 2, icon: "🎯" },
                { name: "OWASP Top 10", level: 90, years: 1, icon: "📋" },
                { name: "Network Security", level: 85, years: 1, icon: "🌐" },
                { name: "Security Analysis", level: 80, years: 1, icon: "🔍" },
                { name: "Cryptography", level: 75, years: 2, icon: "🔐" },
                { name: "Cloud Security", level: 80, years: 1, icon: "☁️" }
            ]
        },
        {
            name: "Automation and ML",
            icon: Brain,
            color: "green",
            skills: [
                { name: "Machine Learning", level: 85, years: 2, icon: "🧠" },
                { name: "Deep Learning", level: 80, years: 2, icon: "🤖" },
                { name: "Data Science", level: 85, years: 2, icon: "📊" },
                { name: "Natural Language Processing", level: 80, years: 2, icon: "💬" },
                { name: "Computer Vision", level: 75, years: 2, icon: "👁️" },
                { name: "AI Ethics", level: 70, years: 1, icon: "⚖️" }
            ]
        },
    ];

    return (
        <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                        Technical Arsenal
                    </h2>
                    <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
                        Battle-tested tools and technologies I wield daily
                    </p>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {skillCategories.map((category, idx) => (
                            <motion.div
                                key={category.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
                            >
                                <div className={`bg-gradient-to-r from-${category.color}-600 to-${category.color}-800 p-4 text-white`}>
                                    <div className="flex items-center gap-3">
                                        <category.icon className="w-8 h-8" />
                                        <div>
                                            <h3 className="text-xl font-bold">{category.name}</h3>
                                            <p className="text-sm opacity-90">{category.skills.length} core competencies</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-5 space-y-5">
                                    {category.skills.map((skill) => (
                                        <div
                                            key={skill.name}
                                            className="relative"
                                            onMouseEnter={() => setHoverSkill(skill.name)}
                                            onMouseLeave={() => setHoverSkill(null)}
                                        >
                                            <div className="flex justify-between items-center mb-2">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-xl">{skill.icon}</span>
                                                    <span className="font-semibold text-gray-800 dark:text-gray-200">
                                                        {skill.name}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-sm text-gray-500">{skill.years} yrs</span>
                                                    <span className={`text-sm font-bold text-${category.color}-600`}>
                                                        {skill.level}%
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    transition={{ duration: 1, delay: idx * 0.1 }}
                                                    className={`h-full bg-gradient-to-r from-${category.color}-500 to-${category.color}-600 rounded-full relative`}
                                                >
                                                    {hoverSkill === skill.name && (
                                                        <div className="absolute inset-0 bg-white opacity-30 animate-pulse" />
                                                    )}
                                                </motion.div>
                                            </div>

                                            {hoverSkill === skill.name && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="absolute -top-10 right-0 bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-lg"
                                                >
                                                    {skill.level}% • {skill.years}+ years
                                                </motion.div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
                    >
                        <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                            <Terminal className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                            <div className="text-2xl font-bold">7+</div>
                            <div className="text-sm text-gray-500">Programming Languages</div>
                        </div>
                        <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                            <Lock className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                            <div className="text-2xl font-bold">50+</div>
                            <div className="text-sm text-gray-500">CVEs Analyzed</div>
                        </div>
                        <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                            <Zap className="w-8 h-8 mx-auto mb-2 text-yellow-600" />
                            <div className="text-2xl font-bold">20+</div>
                            <div className="text-sm text-gray-500">Automation Scripts</div>
                        </div>
                        <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                            <GitBranch className="w-8 h-8 mx-auto mb-2 text-green-600" />
                            <div className="text-2xl font-bold">100+</div>
                            <div className="text-sm text-gray-500">GitHub Commits/Month</div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}