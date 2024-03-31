import "./globals.css";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import { Metadata } from "next";
import { Footer } from "@/components/footer";

const poppins = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Herman | Software Engginer",
  description: "Software engginer who tries to expertise in backend system.",
  icons: {
    icon: "/icon.svg",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <link rel="shortcut icon" href="/favicon.ico" />
      <body className=" bg-gradient-to-r from-blue-300 to-blue-50 dark:from-gray-950 dark:to-gray-800 ">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <main className={`${poppins.className} pt-[85px]`}>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
