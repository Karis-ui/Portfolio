import { Send } from 'lucide-react';
import { FaEnvelope, FaWhatsapp, FaTelegramPlane, FaTwitter } from 'react-icons/fa';

export default function Contact() {
    return (
        <section id="contact" className="py-20 relative font-mono">
            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <div className="flex items-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-100 uppercase tracking-widest">
                        <span className="text-[#fe53bb] mr-2">01.</span>Secure Comms
                    </h2>
                    <div className="h-px bg-gray-800 flex-grow ml-6"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                        <h3 className="text-xl font-bold text-gray-200 mb-4">Establish Connection</h3>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Looking to collaborate on a secure project or just want to talk code? Open a channel below. My inbox is always monitored.
                        </p>

                        <div className="flex flex-col gap-4">
                            <a href="mailto:kariukic547@gmail.com" className="inline-flex items-center gap-3 text-[#fe53bb] hover:text-white transition-colors group w-fit">
                                <div className="p-3 border border-[#fe53bb] rounded bg-black group-hover:bg-[#fe53bb] transition-colors">
                                    <FaEnvelope className="w-5 h-5 text-[#fe53bb] group-hover:text-black" />
                                </div>
                                <span className="border-b border-transparent group-hover:border-white">[EMAIL_ADDRESS]</span>
                            </a>
                            <a href="https://wa.me/0727537684" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-[#fe53bb] hover:text-white transition-colors group w-fit">
                                <div className="p-3 border border-[#fe53bb] rounded bg-black group-hover:bg-[#fe53bb] transition-colors">
                                    <FaWhatsapp className="w-5 h-5 text-[#fe53bb] group-hover:text-black" />
                                </div>
                                <span className="border-b border-transparent group-hover:border-white">WhatsApp me.</span>
                            </a>
                            <a href="https://t.me/karizK" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-[#fe53bb] hover:text-white transition-colors group w-fit">
                                <div className="p-3 border border-[#fe53bb] rounded bg-black group-hover:bg-[#fe53bb] transition-colors">
                                    <FaTelegramPlane className="w-5 h-5 text-[#fe53bb] group-hover:text-black" />
                                </div>
                                <span className="border-b border-transparent group-hover:border-white">Telegram Handle.</span>
                            </a>
                            <a href="https://x.com/Karis1182609" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-[#fe53bb] hover:text-white transition-colors group w-fit">
                                <div className="p-3 border border-[#fe53bb] rounded bg-black group-hover:bg-[#fe53bb] transition-colors">
                                    <FaTwitter className="w-5 h-5 text-[#fe53bb] group-hover:text-black" />
                                </div>
                                <span className="border-b border-transparent group-hover:border-white">Twitter.</span>
                            </a>
                        </div>
                    </div>

                    <form className="space-y-4 border border-gray-800 bg-black/50 p-6 shadow-[0_0_15px_rgba(254,83,187,0.05)]">
                        <div>
                            <label className="block text-gray-500 text-xs mb-1 uppercase">Identification</label>
                            <input type="text" className="w-full bg-gray-900 border border-gray-700 p-3 text-gray-200 focus:outline-none focus:border-[#fe53bb] transition-colors font-sans" placeholder="Name or Alias" />
                        </div>
                        <div>
                            <label className="block text-gray-500 text-xs mb-1 uppercase">Return Address</label>
                            <input type="email" className="w-full bg-gray-900 border border-gray-700 p-3 text-gray-200 focus:outline-none focus:border-[#fe53bb] transition-colors font-sans" placeholder="Email" />
                        </div>
                        <div>
                            <label className="block text-gray-500 text-xs mb-1 uppercase">Payload</label>
                            <textarea rows="4" className="w-full bg-gray-900 border border-gray-700 p-3 text-gray-200 focus:outline-none focus:border-[#fe53bb] transition-colors font-sans resize-none" placeholder="Message content..."></textarea>
                        </div>
                        <button type="button" className="w-full py-3 bg-[#fe53bb]/10 border border-[#fe53bb] text-[#fe53bb] hover:bg-[#fe53bb] hover:text-black transition-all flex items-center justify-center gap-2 uppercase tracking-widest font-bold group">
                            Transmit Data
                            <Send className="w-4 h-4 text-[#fe53bb] group-hover:text-black" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}