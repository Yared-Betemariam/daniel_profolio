import type { Metadata } from "next";
import { DM_Sans, Hanken_Grotesk, Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const poppins = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Dani | A Thumbnail Designer",
  description: "I create Beautiful Thumbnails",
  icons: [
    {
      rel: "icon",
      url: "/logo.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={cn(poppins.className, "scroll-smooth scroll-m-10")}
      lang="en"
    >
      <body className="flex flex-col text-gray-200 font-medium text-lg bg-gradient-to-r to-zinc-900 from-gray-900 relative ">
        <div className="squared fixed inset-0 -z-20"></div>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
