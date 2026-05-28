"use client";

import { useState } from "react";
import { Menu, X, Shield, Mail } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const navLinks = ["About", "Projects", "Skills", "Achievements", "Blog", "Contact", "Dashboard"];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <a href="/" className="flex items-center gap-2 text-xl font-bold">
                        <Shield className="w-6 h-6 text-blue-600" />
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            karisck.me
                        </span>
                    </a>

                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link}
                                href={link === "Projects" ? "/projects" : link === "Achievements" ? "/achievements" : link === "CV" ? "/cv" : link === "Dashboard" ? "/dashboard" : `/#${link.toLowerCase()}`}
                                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                            >
                                {link}
                            </a>
                        ))}
                        <div className="flex items-center gap-4">
                            <ThemeToggle />
                            <a href="https://github.com/Karis-ui" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="https://linkedin.com/in/karis" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="mailto:kariukic547@gmail.com" className="hover:text-blue-600">
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {isOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
                        {navLinks.map((link) => (
                            <a
                                key={link}
                                href={link === "Projects" ? "/projects" : link === "Achievements" ? "/achievements" : link === "CV" ? "/cv" : link === "Dashboard" ? "/dashboard" : `/#${link.toLowerCase()}`}
                                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600"
                                onClick={() => setIsOpen(false)}
                            >
                                {link}
                            </a>
                        ))}
                        <div className="flex items-center justify-between pt-4">
                            <ThemeToggle />
                            <div className="flex gap-4">
                                <a href="https://github.com/Karis-ui" target="_blank" className="hover:text-blue-600">GitHub</a>
                                <a href="https://linkedin.com/in/karis" target="_blank" className="hover:text-blue-600">LinkedIn</a>
                                <a href="mailto:kariukic547@gmail.com" className="hover:text-blue-600">Email</a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}