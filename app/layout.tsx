import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import app from "@/app-config";
import { cn } from "@/lib/utils";
import Provider from "@/src/providers/Provider";
import { Toaster } from "@/components/ui/toaster";


const myFont = localFont({
  src: [
    {
      path: '../public/fonts/Teachers-Regular.ttf',
      weight: "400"
    },
    {
      path: '../public/fonts/Teachers-Bold.ttf',
      weight: "700"
    }
  ],
  variable: "--font-teachers"
});

export const metadata: Metadata = {
  title: app.name,
  description: app.description,
};

interface RootLayoutProps {
  children?: React.ReactNode
};

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen font-sans antialiased", myFont.variable)}>
        <Provider>
          {children}

        </Provider>
        <Toaster />
      </body>
    </html>
  );
}


export default RootLayout;
