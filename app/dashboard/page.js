'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    Linkedin, Github, Mail, GitCommit, Star, GitFork, Users,
    Activity, Calendar, Code, Shield, Zap, Bell, AlertCircle
} from "lucide-react";

export default function Dashboard() {
    const [githubData, setGithubData] = useState(null);
    const [contribution, setContributions] = useState([]);
    const [booting, setBooting] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setBooting(false), 500);
                    return 100;
                }
                return prev + Math.floor(Math.random() * 15) + 5;
            });
        }, 150);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        fetch("https://api.github.com/users/karis-ui")
            .then((res) => res.json())
            .then((data) => setGithubData(data))
            .catch((err) => console.error("GitHub API error:", err));
    }, []);

    const getActivityIcon = (type) => {
        switch (type) {
            case 'push': return GitCommit;
            case 'pr': return GitFork;
            case 'star': return Star;
            case 'issue': return Bell;
            default: return Activity;
        }
    };

    const stats = [
        { label: "Repositories", value: githubData?.public_repos || 0, icon: GitCommit, color: 'green' },
        { label: "Stars", value: githubData?.public_repos ? "★ 42" : "Loading...", icon: Star, color: 'yellow' },
        { label: "Followers", value: githubData?.followers || 0, icon: Users, color: 'blue' },
        { label: "Contributions", value: "1,247", icon: Activity, color: 'purple' },
    ];

    const recentActivity = [
        { action: "Pushed to secure-api-gateway", time: "2 hours ago", type: "push" },
        { action: "Opened PR #42", time: "yesterday", type: "pr" },
        { action: "Starred langchain/langchain", time: "2 days ago", type: "star" },
        { action: "Created issue: Add rate limiting", time: "3 days ago", type: "issue" },
    ];

    if (booting) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-black font-mono">
                <div className="w-64">
                    <div className="flex justify-between text-[#08f7fe] mb-2 text-sm uppercase tracking-widest">
                        <span className="animate-pulse">BOOTING_DASHBOARD...</span>
                        <span>{progress}%</span>
                    </div>
                    <div className="h-1 w-full bg-gray-900 overflow-hidden">
                        <div
                            className="h-full bg-[#08f7fe] shadow-[0_0_10px_#08f7fe] transition-all duration-150"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <div className="mt-4 text-xs text-gray-500 space-y-1">
                        <p>{'>'} Syncing GitHub_Data</p>
                        <p>{'>'} Compiling Contributions</p>
                        {progress > 40 && <p className="text-[#08f7fe]">{'>'} Data_Fetched_Successfully.</p>}
                        {progress > 70 && <p>{'>'} Rendering_Stats_Modules</p>}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-24 p-8">
            <div className="max-w-6xl mx-auto px-4">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 p-6 bg-black border border-[#08f7fe]/30 shadow-[0_0_20px_rgba(8,247,254,0.15)] rounded-sm font-mono"
                >
                    <h1 className="text-3xl md:text-4xl font-bold mb-2 text-[#08f7fe] uppercase tracking-tight">
                        Dashboard_
                    </h1>
                    <p className="text-lg text-gray-400">
                        <span className="text-[#00ff41]">{'> '}</span>Welcome back, Tech_Karis! Here's a snapshot of your recent activity and stats.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 text-center"
                        >
                            <stat.icon className={`w-10 h-10 mx-auto mb-3 p-2 rounded-lg ${stat.color === 'green' ? 'bg-green-100 dark:bg-green-900/30 text-green-600' :
                                stat.color === 'yellow' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600' :
                                    stat.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600' :
                                        'bg-purple-100 dark:bg-purple-900/30 text-purple-600'
                                }`} />
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
                >
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-800 dark:text-gray-200">
                        <Activity className="w-5 h-5 text-green-500" />
                        Contribution Activity
                    </h2>
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 text-center text-gray-500">
                        Last 30 days: 142 contributions
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6"
                >
                    <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">Recent Activity</h2>
                    <ul className="space-y-4">
                        {recentActivity.map((activity, idx) => {
                            const IconComponent = getActivityIcon(activity.type);
                            return (
                                <li key={idx} className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <IconComponent className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{activity.action}</p>
                                        <p className="text-xs text-gray-500">{activity.time}</p>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white"
                >
                    <div className="flex items-center gap-2 mb-3">
                        <Calendar className="w-5 h-5" />
                        <h2 className="text-lg font-bold">Team Status</h2>
                        <span className="ml-2 px-2 py-0.5 bg-green-500 text-xs rounded-full animate-pulse">Active Now</span>
                    </div>
                    <p className="mb-3">Core team members are currently active. Programming languages in use:</p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        <span className="px-3 py-1 bg-blue-500/80 rounded-full text-sm">Python</span>
                        <span className="px-3 py-1 bg-purple-500/80 rounded-full text-sm">JavaScript</span>
                        <span className="px-3 py-1 bg-red-500/80 rounded-full text-sm">FastAPI</span>
                        <span className="px-3 py-1 bg-green-500/80 rounded-full text-sm">Go</span>
                        <span className="px-3 py-1 bg-yellow-500/80 rounded-full text-sm">Assembly</span>
                        <span className="px-3 py-1 bg-orange-500/80 rounded-full text-sm">TensorFlow</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}