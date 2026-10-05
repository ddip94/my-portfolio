import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display-face" });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body-face" });

export const metadata = {
  title: "Dip Debnath | Web Developer",
  description: "Portfolio of Dip Debnath, a web developer building with React and Next.js.",
};

// Sets the saved theme before first paint (default: dark) so the page doesn't flash.
const themeScript = `try{if(localStorage.getItem("theme")!=="light")document.documentElement.classList.add("dark")}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${display.variable} ${body.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-stone-50 font-sans text-stone-800 antialiased dark:bg-stone-950 dark:text-stone-200">
        {children}
      </body>
    </html>
  );
}
