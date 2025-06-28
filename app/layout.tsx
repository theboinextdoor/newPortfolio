import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "100"
});

export const metadata: Metadata = {
  title: "Faraaz",
  description: "the coder next door",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={poppins.className} >
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
          >
        {children}
        </ThemeProvider>
        </body>
    </html>
  );
}
