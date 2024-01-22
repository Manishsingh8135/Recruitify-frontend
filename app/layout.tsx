
import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { NavigationMenuDemo } from "@/components/menu/Navbar";
import Sidebar from "@/components/menu/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recruitify",
  description: "Get your dream job today!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <><ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className="">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="min-w-0 w-full h-16 md:fixed md:pl-64 "><NavigationMenuDemo /></div>
            <div className="flex min-w-full">
              <div className="">
                <Sidebar />
              </div>
              <div className="flex flex-grow md:pl-64 md:overflow-y-auto">
                {children}

              </div>
            </div>

          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
    </>

  );
}
