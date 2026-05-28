import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const outfit = Outfit({ subsets: ["latin"], variable: '--font-outfit' });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: '--font-jetbrains' });

export const metadata = {
  title: "Karis-ui | Software Engineer & CyberSecurity Expert",
  description: "Portfolio showcasing software development projects, Cybersecurity expertise and ML automation projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${outfit.variable} ${jetbrains.variable}`}>
      <body className={`${outfit.className} relative bg-deep text-secondary`}>
        <div className="scanline"></div>
        <Navbar />
        <main className="pt-16 relative z-10">{children}</main>
      </body>
    </html>
  );
}
