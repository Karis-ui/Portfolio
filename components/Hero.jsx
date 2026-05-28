'use client'
import { images } from '@/next.config';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowDown, Terminal, Shield, Download, FileText, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
    const [booting, setBooting] = useState(true);
    const [progress, setProgress] = useState(0);
    const [typedText, setTypedText] = useState("");
    const [isHovering, setIsHovering] = useState(false);

    const phrases = [
        " Automating security pipelines...",
        " Blue Teaming...",
        " Building secure systems...",
        " Deploying secure infrastructure..."
    ];
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const images = [
        { src: "/profile1.jpg", alt: "ML" },
        { src: "/profile2.jpg", alt: "Cybersecurity" },
        { src: "/profile3.jpg", alt: "Developer" }
    ];
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        if (isHovering) return;

        const interval = setInterval(() => {
            setCurrentImage((pre) => (pre + 1) % images.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [isHovering]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        let timer;
        const currentPhrase = phrases[phraseIndex];
        const typeSpeed = isDeleting ? 30 : 80;

        if (!isDeleting && typedText === currentPhrase) {
            timer = setTimeout(() => setIsDeleting(true), 1500);
        } else if (isDeleting && typedText === "") {
            setIsDeleting(false);
            setPhraseIndex((prev) => (prev + 1) % phrases.length);
        } else {
            const nextText = isDeleting
                ? currentPhrase.substring(0, typedText.length - 1)
                : currentPhrase.substring(0, typedText.length + 1);
            timer = setTimeout(() => setTypedText(nextText), typeSpeed);
        }
        return () => clearTimeout(timer);
    }, [typedText, isDeleting, phraseIndex]);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setBooting(false), 800);
                    return 100;
                }
                return prev + Math.floor(Math.random() * 15) + 5;
            });
        }, 120);
        return () => clearInterval(interval);
    }, []);

    if (booting) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#0d1117] font-mono z-50 fixed inset-0">
                <div className="w-80">
                    <div className="flex justify-between text-[#58a6ff] mb-2 text-sm">
                        <span className="animate-pulse">INITIALIZING_SYSTEM...</span>
                        <span>{progress}%</span>
                    </div>
                    <div className="h-1 w-full bg-[#1c2333] overflow-hidden relative rounded">
                        <div
                            className="h-full bg-[#58a6ff] shadow-[0_0_10px_#58a6ff] transition-all duration-200"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <div className="mt-4 text-xs text-[#8b949e] space-y-2 lg:text-sm">
                        <p>{'>'} Loading core modules...</p>
                        {progress > 30 && <p className="text-[#a78bfa]">{'>'} Enabling cybersecurity protocols...</p>}
                        {progress > 60 && <p className="text-[#22d3ee]">{'>'} Connecting to secure network...</p>}
                        {progress > 90 && <p className="text-[#00ff9f]">{'>'} Access granted. Standby.</p>}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <section id="home" className="min-h-screen flex items-center pt-24 pb-12 relative overflow-hidden">
            <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(28,35,51,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(28,35,51,0.5)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)]"></div>

            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#58a6ff] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse-ring"></div>
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#a78bfa] rounded-full mix-blend-screen filter blur-[128px] opacity-20" style={{ animationDelay: '1s' }}></div>

            <div className="max-w-7xl mx-auto px-6 auto-rows-max relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center min-h-[min(100vh-8rem,800px)]">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col space-y-6 lg:pr-12 lg:pt-0 pt-16"
                    >
                        <div className="flex items-center gap-3 text-sm font-mono tracking-widest text-[#58a6ff] uppercase">
                            <span className="w-12 h-px bg-[#58a6ff]/50"></span>
                            <span>Software Developer • Cybersecurity • Automation Engineer</span>
                        </div>

                        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-[#f0f6fc] leading-[1.1]">
                            Macharia Charles Kariuki<br />
                        </h1>

                        <div className="h-12 flex items-center font-mono text-base sm:text-lg text-[#00ff9f]">
                            <Terminal className="w-5 h-5 mr-3 text-[#58a6ff]" />
                            <span>{typedText}</span>
                            <span className="w-2 h-5 bg-[#00ff9f] ml-1 animate-pulse" />
                        </div>

                        <p className="text-base sm:text-lg text-[#c9d1d9] leading-relaxed max-w-xl">
                            Specializing in building robust, high-performance applications while architecting secure infrastructure. Bridging the gap between software engineering and cybersecurity.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 pt-4">
                            <a
                                href="#projects"
                                className="group relative px-8 py-4 bg-[#121d2b] border border-[#58a6ff]/30 text-[#f0f6fc] font-mono hover:border-[#58a6ff] transition-all duration-300 overflow-hidden flex items-center justify-center shadow-[0_0_15px_rgba(88,166,255,0.1)] hover:shadow-[0_0_30px_rgba(88,166,255,0.3)]"
                            >
                                <span className="absolute inset-0 w-full h-full bg-[#58a6ff]/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                                <span className="relative z-10 flex items-center gap-2">
                                    Initiate_Projects <ArrowDown className="w-4 h-4" />
                                </span>
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-4 bg-transparent border border-[#222d3f] text-[#c9d1d9] font-mono hover:border-[#a78bfa] hover:text-[#a78bfa] transition-all duration-300 flex items-center justify-center hover:shadow-[0_0_20px_rgba(167,139,250,0.2)]"
                            >
                                Contact_Gateway
                            </a>
                        </div>
                        <div className='flex'>
                            <a href="/CV.html" target='_blank' rel='noopener noreferrer' className="px-8 py-4 bg-transparent border border-[#222d3f] text-[#c9d1d9] font-mono hover:border-[#a78bfa] hover:text-[#a78bfa] transition-all duration-300 flex items-center justify-center hover:shadow-[0_0_20px_rgba(167,139,250,0.2)]">
                                <FileText className="w-5 h-5" /> View CV <ExternalLink className='w-5 h-5' />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="relative flex justify-center items-center h-[400px] sm:h-[500px] lg:h-[600px] w-full"
                    >
                        <div className="absolute w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] rounded-full border border-[#222d3f] border-dashed animate-spin-slow opacity-60"></div>

                        <div className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full border-t border-r border-[#58a6ff]/40 animate-spin-reverse opacity-80" style={{ backgroundImage: 'conic-gradient(from 180deg at 50% 50%, rgba(88,166,255,0) 0deg, rgba(88,166,255,0.1) 360deg)' }}></div>

                        <div className="absolute w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] rounded-full border-[1.5px] border-[#00ff9f]/30 border-l-[#00ff9f] animate-spin-slow shadow-[0_0_30px_rgba(0,255,159,0.2)]"></div>

                        <div className="absolute z-10 w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] bg-[#121d2b] rounded-full border border-[#58a6ff]/50 overflow-hidden flex items-center justify-center shadow-[inset_0_0_30px_rgba(88,166,255,0.2)]">
                            <div className="w-full h-full bg-gradient-to-tr from-[#121d2b] to-[#1c2333] flex flex-col items-center justify-center relative">
                                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-50"></div>
                                <div className="w-20 h-20 sm:w-32 sm:h-32 bg-gradient-hero rounded-full opacity-80 blur-xl animate-pulse-ring"></div>
                                <Shield className="w-10 h-10 sm:w-16 sm:h-16 text-[#f0f6fc] absolute z-20 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                            </div>
                        </div>

                        <div className="absolute top-[5%] right-[5%] lg:top-[10%] lg:right-[10%] bg-[#121d2b]/80 backdrop-blur border border-[#a78bfa]/30 p-2 sm:p-3 rounded font-mono text-[10px] sm:text-xs text-[#a78bfa] shadow-[0_0_10px_rgba(167,139,250,0.1)] flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#a78bfa] animate-pulse"></span>
                            AI_MODELS_ACTIVE
                        </div>

                        <div className="absolute bottom-[10%] left-[2%] lg:bottom-[15%] lg:left-[5%] bg-[#121d2b]/80 backdrop-blur border border-[#58a6ff]/30 p-2 sm:p-3 rounded font-mono text-[10px] sm:text-xs text-[#58a6ff] shadow-[0_0_10px_rgba(88,166,255,0.1)] flex flex-col gap-1">
                            <div className="flex justify-between w-20 sm:w-24"><span>SYS_LOAD</span><span>32%</span></div>
                            <div className="w-full h-1 bg-[#1c2333] rounded overflow-hidden">
                                <div className="h-full bg-[#58a6ff] w-[32%]"></div>
                            </div>
                        </div>

                        <div className="absolute bottom-[5%] right-[0%] lg:bottom-[5%] lg:-right-[10%] bg-[#121d2b]/80 backdrop-blur border border-[#00ff9f]/30 p-2 sm:p-3 rounded-full font-mono text-[10px] sm:text-xs text-[#00ff9f] shadow-[0_0_15px_rgba(0,255,159,0.2)] flex items-center gap-2 sm:gap-3">
                            <div className="relative flex h-2 w-2 sm:h-3 sm:w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff9f] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 bg-[#00ff9f]"></span>
                            </div>
                            Q1 Availability: OPEN
                        </div>

                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="relative flex justify-center items-center h-[400px] sm:h-[500px] lg:h-[600px] w-full"
                    >
                        <div className="absolute w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] rounded-full border border-[#222d3f] border-dashed animate-spin-slow opacity-60"></div>

                        <div className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full border-t border-r border-[#58a6ff]/40 animate-spin-reverse opacity-80" style={{ backgroundImage: 'conic-gradient(from 180deg at 50% 50%, rgba(88,166,255,0) 0deg, rgba(88,166,255,0.1) 360deg)' }}></div>

                        <div className="absolute w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] rounded-full border-[1.5px] border-[#00ff9f]/30 border-l-[#00ff9f] animate-spin-slow shadow-[0_0_30px_rgba(0,255,159,0.2)]"></div>

                        <div className="absolute z-10 w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] bg-[#121d2b] rounded-full border border-[#58a6ff]/50 overflow-hidden flex items-center justify-center shadow-[inset_0_0_30px_rgba(88,166,255,0.2)]">
                            <div className="w-full h-full bg-gradient-to-tr from-[#121d2b] to-[#1c2333] flex flex-col items-center justify-center relative">
                                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-50"></div>
                                <div className="w-20 h-20 sm:w-32 sm:h-32 bg-gradient-hero rounded-full opacity-80 blur-xl animate-pulse-ring"></div>
                                <AnimatePresence mode='wait'>
                                    <motion.div
                                        key={currentImage}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9, rotateY: 90 }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className='absolute z-20 flex flex-col items-center'
                                    >
                                        <img src={images[currentImage].src} alt={images[currentImage].alt} className="w-24 h-24 sm:w-32 sm:h-32 rounded-fullobject-cover border-2 border-[#58a6ff]/50 shadow-[0_0_20px_rgba(88,166,255,0.3)]" />
                                    </motion.div>
                                </AnimatePresence>
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#121d2b] to-[#1c2333] rounded-full opacity-80 blur-xl animate-pulse-ring">
                                    {images.map((_, idx) => (
                                        <div
                                            key={idx}
                                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === currentImage ? 'bg-[#58a6ff] w-3' : 'bg-[#58a6ff]/40'}`}
                                            style={{
                                                transform: `rotate(${idx * (360 / images.length)}deg) translate(100px)`
                                            }}
                                        />
                                    ))}
                                    <div
                                        onMouseEnter={() => setIsHovering(true)}
                                        onMouseLeave={() => setIsHovering(false)}
                                        className="absolute inset-0 z-30"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="absolute top-[5%] right-[5%] lg:top-[10%] lg:right-[10%] bg-[#121d2b]/80 backdrop-blur border border-[#a78bfa]/30 p-2 sm:p-3 rounded font-mono text-[10px] sm:text-xs text-[#a78bfa] shadow-[0_0_10px_rgba(167,139,250,0.1)] flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#a78bfa] animate-pulse"></span>
                            ML
                        </div>

                        <div className="absolute bottom-[10%] left-[2%] lg:bottom-[15%] lg:left-[5%] bg-[#121d2b]/80 backdrop-blur border border-[#58a6ff]/30 p-2 sm:p-3 rounded font-mono text-[10px] sm:text-xs text-[#58a6ff] shadow-[0_0_10px_rgba(88,166,255,0.1)] flex flex-col gap-1">
                            <div className="flex justify-between w-20 sm:w-24"><span>SECURITY</span><span>95%</span></div>
                            <div className="w-full h-1 bg-[#1c2333] rounded overflow-hidden">
                                <div className="h-full bg-[#58a6ff] w-[95%]"></div>
                            </div>
                        </div>

                        <div className="absolute bottom-[5%] right-[0%] lg:bottom-[5%] lg:-right-[10%] bg-[#121d2b]/80 backdrop-blur border border-[#00ff9f]/30 p-2 sm:p-3 rounded-full font-mono text-[10px] sm:text-xs text-[#00ff9f] shadow-[0_0_15px_rgba(0,255,159,0.2)] flex items-center gap-2 sm:gap-3">
                            <div className="relative flex h-2 w-2 sm:h-3 sm:w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff9f] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 bg-[#00ff9f]"></span>
                            </div>
                            DEVELOPMENT
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}