'use client'
import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
    const [darkMode,setDarkMode] = useState(false);

    useEffect(()=>{
        const isDark = localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
        setDarkMode(isDark);
        document.documentElement.classList.toggle('dark',isDark);
    },[]);

    const toggleTheme = () => {
        const newDark = !darkMode;
        setDarkMode(newDark);
        localStorage.setItem('theme',newDark ? "dark": "light");
        document.documentElement.classList.toggle('dark',newDark);
    }

    return (
        <button onClick={toggleTheme} className="p-2 rounded-lg gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition" aria-label="Toggle Theme">
            {darkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-500" />}
        </button>
    );
}