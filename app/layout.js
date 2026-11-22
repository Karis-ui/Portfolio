import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: '--font-outfit' });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: '--font-jetbrains' });

export const metadata = {
  title: "Charles Macharia Kariuki | Software & Security",
  description: "Portfolio of Charles Macharia Kariuki: software engineering, cybersecurity and automation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`scroll-smooth ${outfit.variable} ${jetbrains.variable}`}>
      <body className={`${outfit.className} relative bg-deep text-secondary`}>
        {children}
      </body>
    </html>
  );
}
