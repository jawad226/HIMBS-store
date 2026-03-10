import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import WhatsAppFloating from "../components/WhatsAppFloating";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Hafiz Iron & Building Material Store | Bahawalpur Trusted Supplier",
    template: "%s | Hafiz Iron Store"
  },
  description: "Get the highest quality DG Khan Cement, Lucky Cement, and Grade 60 Iron in Bahawalpur. Daily updated market rates, wholesale and retail available. Reliable site delivery.",
  keywords: ["Hafiz Iron", "Hafiz Building Material", "Bahawalpur Construction Store", "DG Khan Cement Bahawalpur", "Lucky Cement Bahawalpur", "Grade 60 Iron Bahawalpur", "Steel Rates Bahawalpur"],
  authors: [{ name: "Hafiz Iron Store" }],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://hafizironstore.com",
    title: "Hafiz Iron & Building Material Store",
    description: "Quality Construction Materials at Competitive Market Rates. Bahawalpur's premier destination for steel and cement.",
    siteName: "Hafiz Iron Store",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Hafiz Iron & Building Material Store Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppFloating />
      </body>
    </html>
  );
}
