'use client';
import { Award, GraduationCap, Target, BookOpen, Shield, Code, Rocket, Compass, Calendar, CheckCircle, Globe, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Achievements() {
    return (
        <div className='min-h-screen bg-white dark:bg-gray-900 pt-24 pb-20'>
            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className='inline-flex items-center gap-2 px-4 py-2 bg-gradient-to r-from-blue to-purple-600 rounded-full text-white text-sm mb-4'>
                        <Award className='w-4 h-4' />
                        Agency log * 2026 - Present
                    </div>
                    <h2 className='text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent'>
                        Achievements & Certifications
                    </h2>
                    <p className='text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto font-mono'>
                        "A collection of Certifications,Education patches,CourseWork,and Future operations from my journey as a Tech Agent"
                    </p>
                </motion.div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className='bg-white dark:bg-gray-800 rounded-xl shadow-md border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow'
                    >
                        <div className='h-full bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-300 group'>
                            <div className='flex-items-start justify-between'>
                                <Shield className='w-10 h-10 opacity-80 group-hover:scale-110 transition' />
                                <span className='text-xs font-mono bg-white/20 px-2 py-1 rounded'>Elite tier</span>
                            </div>
                            <h3 className='text-2xl font-bold mt-4 mb-3'>Certifications</h3>
                            <div className='space-y-3'>
                                <div className='flex-items-center gap-3 text-sm bg-white/10 rounded-lg p-2'>
                                    <CheckCircle className='w-4 h-4 text-green-400' />
                                    <span>OSCP - Offensive Security Certified Professional</span>
                                </div>
                                <div className='flex-items-center gap-3 text-sm bg-white/10 rounded-lg p-2'>
                                    <CheckCircle className='w-4 h-4 text-green-400' />
                                    <span>CEH - Certified Ethical Hacker</span>
                                </div>
                                <div className='flex-items-center gap-3 text-sm bg-white/10 rounded-lg p-2'>
                                    <CheckCircle className='w-4 h-4 text-green-400' />
                                    <span>CompTIA Security+</span>
                                </div>
                                <div className='flex-items-center gap-3 text-sm bg-white/10 rounded-lg p-2'>
                                    <CheckCircle className='w-4 h-4 text-green-400' />
                                    <span>AWS Certified Security - Specialty</span>
                                </div>
                                <div className='flex-items-center gap-3 text-sm bg-white/10 rounded-lg p-2'>
                                    <CheckCircle className='w-4 h-4 text-green-400' />
                                    <span>GCP Professional Cloud Security Engineer</span>
                                </div>
                                <div className='flex-items-center gap-3 text-sm bg-white/10 rounded-lg p-2'>
                                    <CheckCircle className='w-4 h-4 text-green-400' />
                                    <span>CISSP - Certified Information Systems Security Professional</span>
                                </div>
                                <div className='mt-4 text-xs opacity-70'>3+ active certifications</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                    >
                        <div className="h-full bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition">
                            <GraduationCap className="w-10 h-10 text-blue-600 mb-3" />
                            <h3 className="text-xl font-bold mb-2">Formal Education</h3>
                            <div className="space-y-3">
                                <div>
                                    <p className="font-semibold">MSc in Cybersecurity</p>
                                    <p className="text-sm text-gray-500">Cisco Certification • 2025-2026</p>
                                    <p className="text-xs text-gray-400 mt-1">Project: "ML-Based Anomaly Detection in Zero-Trust Networks"</p>
                                </div>
                                <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                                    <p className="font-semibold">BSc in Software Engineering</p>
                                    <p className="text-sm text-gray-500">Zetech University • 2024-2027</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="h-full bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition">
                            <BookOpen className="w-10 h-10 text-purple-600 mb-3" />
                            <h3 className="text-xl font-bold mb-2">Security and CourseWork</h3>
                            <div className="space-y-3">
                                <div className='flex-items-start gap-2 text-sm'>
                                    <Calendar className="w-3 h-3 mt-0.5 text-gray-400" />
                                    <span>Advanced Penetration Testing (SANS SEC560)</span>
                                </div>
                                <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                                    <p className="w-3 h-3 mt-0.5 text-gray-400" />
                                    <span>Cloud Security and Architecture (AWS Certified)2</span>
                                </div>
                                <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                                    <p className="w-3 h-3 mt-0.5 text-gray-400" />
                                    <span>Incident Response and Forensics (IR-200)</span>
                                </div>
                                <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                                    <p className="w-3 h-3 mt-0.5 text-gray-400" />
                                    <span>Reverse Engineering Malware</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="h-full bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition">
                            <Code className="w-10 h-10 text-green-600 mb-3" />
                            <h3 className="text-xl font-bold mb-2">Development and ML track</h3>
                            <div className="space-y-3">
                                <div className='flex-items-start gap-2 text-sm'>
                                    <Calendar className="w-3 h-3 mt-0.5 text-gray-400" />
                                    <span>Deep Learning Specialization (DeepLearning.AI)</span>
                                </div>
                                <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                                    <p className="w-3 h-3 mt-0.5 text-gray-400" />
                                    <span>Systtem Design and Architecture (Udemy)</span>
                                </div>
                                <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                                    <p className="w-3 h-3 mt-0.5 text-gray-400" />
                                    <span>Docker && Kubernetes Deep Dive (Udemy)</span>
                                </div>
                                <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                                    <Calendar className='w-3 h-3 mt-0.5 text-gray-400' />
                                    <span>LLM Engineering && Prompt Engineering (Coursera)</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 text-white shadow-xl">
                            <Target className="w-10 h-10 text-yellow-500 mb-3" />
                            <h3 className="text-xl font-bold mb-2">Self-Learning Path</h3>
                            <div className="space-y-3">
                                <div>
                                    <p className="text-sm opacity-90">Over 20 simulations win the Hack The Box lab</p>
                                    <div className="w-full bg-gray-700 rounded-full h-1.5 mt-1">
                                        <div className="bg-green-500 h-1.5 rounded-full w-[99%]"></div>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm opacity-90">TryHackMe: 200+ rooms completed</p>
                                    <div className="w-full bg-gray-700 rounded-full h-1.5 mt-1">
                                        <div className="bg-red-500 h-1.5 rounded-full w-4/5"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className='mt-12 text-center text-sm text-gray-500'
                    >
                        <p>Active agency since 2022.Improvement over the years + continuous learning = success</p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}