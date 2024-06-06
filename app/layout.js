import { Inter } from "next/font/google";
import Head from 'next/head';
import "./globals.css";
import  AppProvider  from "./provider/AppContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Front Desk",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/app/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
