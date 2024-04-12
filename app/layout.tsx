import "./globals.css";
import "tailwindcss/tailwind.css";
import { Inter } from "next/font/google";
import Header from "@/pages/Components/Header";
import Footer from "@/pages/Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Havoc-OS",
  description: "Havoc-OS A fully Customized ROM",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <div>
        <head>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9269892900308647"
            crossOrigin="anonymous"
          ></script>
          <title>Havoc-OS</title>
        </head>
        <body className={inter.className}>
          {/* <Header /> */}
          {children}
          {/* <Footer /> */}
        </body>
      </div>
    </html>
  );
}
