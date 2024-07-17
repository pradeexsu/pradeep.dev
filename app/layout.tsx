import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Footer from "./components/footer";
import { BackgroundBeams } from "./components/ui/background-beams";
import { FloatingNav } from "./components/ui/floating-navbar";
import { Metadata } from "next";

const cx = (...classes: any[]) => classes.filter(Boolean).join(" ");

const navLinkData = [
  { link: "/", name: "Home" },
  { link: "/work", name: "Work" },
  { link: "/about", name: "About" },
];

export const metadata: Metadata = {
  metadataBase: new URL("https://pradeexsu.github.io"),
  title: {
    default: "Pradeep Suthar",
    template: "%s | Pradeep Suthar",
  },
  description: "Developer, writer, and creator.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-[#111010]",
        "selection:bg-purple-400/45",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-2xl flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto overflow-y-scroll">
        <FloatingNav navItems={navLinkData} />
        <main className="flex-auto min-w-0 mt-24 flex flex-col px-2 md:px-0">
          {children}
          <Footer />
        </main>
        <BackgroundBeams className="opacity-15 bg-transparent" />
      </body>
    </html>
  );
}
