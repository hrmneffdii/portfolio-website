import "./globals.css";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";

const poppins = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // create dark mode default

    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${poppins.className} px-6 sm:px-16`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <main className="pt-24">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
