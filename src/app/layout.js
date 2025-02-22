import localFont from "next/font/local";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/style.css";
import './css/responsive.css';
import './css/base.css'
import './css/sandbox.css'
import './css/embla.css'
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "School Abroad",
  description: "School Abroad is a comprehensive platform designed to help students explore educational opportunities around the world. It offers valuable resources, guides, and tools to navigate the process of studying abroad, from choosing the right school to understanding visa requirements and financial aid options. Whether you're looking for undergraduate, graduate, or professional courses, School Abroad is your go-to source for making your dream of studying overseas a reality.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"> <head>
    {/* Favicon Links */}
    <link rel="icon" href="/favicon.ico" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
    <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
    <link rel="manifest" href="/site.webmanifest" />
  </head>
      <body className={``}>
        <Header />

          {children}
        <Footer />
      </body>
    </html>
  );
}
