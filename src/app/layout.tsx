import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aniket Kumawat | Java Backend Developer",
  description: "Java Backend Developer passionate about building scalable backend systems, REST APIs, and AI-powered applications using Spring Boot.",
  keywords: ["Java", "Spring Boot", "Backend Developer", "REST APIs", "AI Integration", "Portfolio"],
  authors: [{ name: "Aniket Kumawat" }],
  icons: {
    icon: "/profile.jpg",
  },
  openGraph: {
    title: "Aniket Kumawat | Java Backend Developer",
    description: "Java Backend Developer passionate about building scalable backend systems, REST APIs, and AI-powered applications using Spring Boot.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-portfolio-bg text-portfolio-text`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
