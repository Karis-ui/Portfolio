'use client';
import { Shield, Code, Globe, Award, Target, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-gray-10 dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-6xl mx-auto px-4 sm:px:6 lg:px:8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-8">
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-full text-sm font-mono">
                            <Shield className="w-4 h-4" />
                            // OPERATIONAL READY //
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold text-center mb-6">
                        <span className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
                            Tech Agent-DevSecOps Engineer
                        </span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto font-mono">
                        "We don't just write code, we engineer resilience, secure systems, and build weapons-grade software"
                    </p>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-4">
                            <p className="text-lg leading-relaxed">
                                I'm a <span className="font-bold text-red-600 dark:text-red-400">DevSecOps Engineer</span> living at the media of
                                <span className="font-bold text-red-600 dark:text-red-400"> Development,</span> <span className="font-bold text-red-600 dark:text-red-400">CyberSecurity</span> and <span className="font-bold text-red-600 dark:text-red-400">Automation</span>.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300">
                                My agency froms its roots on Breaking things,securing them,and automating the process.
                                Whether it's hardening APIs against zero-day threats,deploying scalable cloud infrastructure,or
                                building custom automation tools,I deliver solutions that are robust,secure,and efficient.
                            </p>
                            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-1-4 border-red-600 mt-4">
                                <p className="text-sm font-mono text-red-700 dark:text-red-300">
                                    We don't believe in perimeter security; we believe in Zero Trust Architecture,defense in depth and assuming possible breach."
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md border-gray-200 dark:border-gray-700">
                                <Target className="w-8 h-8 text-red-600 mx-auto mb-2" />
                                <div className="text-2xl font-bold">100%</div>
                                <div className="text-gray-600 dark:text-gray-300">Mission success Rate</div>
                            </div>
                            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md border-gray-200 dark:border-gray-700">
                                <Zap className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                                <div className="text-2xl font-bold">0</div>
                                <div className="text-gray-600 dark:text-gray-300">Unturned stone(vulnerability)</div>
                            </div>
                            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md border-gray-200 dark:border-gray-700">
                                <Globe className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                                <div className="text-2xl font-bold">24/7</div>
                                <div className="text-gray-600 dark:text-gray-300">Operation Readiness</div>
                            </div>
                            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md border-gray-200 dark:border-gray-700">
                                <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                                <div className="text-2xl font-bold">Top 1%</div>
                                <div className="text-gray-600 dark:text-gray-300">Bug bounty hunters</div>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mt-12 p-6 bg-gradient-to-r from-red-600 via-purple-600 to-blue rounded-2xl text-white text-center">
                        <p className="text-lg md:text-xl font-mono">
                            "Code. Breach. Defend. Automate. Repeat."
                        </p>
                        <p className="text-md md:text-lg mt-4 text-red-100">
                            Ready to deploy a weapon-grade engineer? Let's talk.Available for high-stakes missions,security audits, and elite engineering challenges.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}