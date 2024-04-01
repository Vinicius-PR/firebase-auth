import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { AuthContextProvider } from '@/app/context/AuthContext'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Firebase Auth",
  description: "Log in using Firebase system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <Header />
          <div className="mx-auto mt-6 max-w-7xl px-4 pb-7">
            {children}
          </div>
        </AuthContextProvider>
      </body>
    </html>
  );
}
