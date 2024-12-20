import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google"
import DashboardWrapper from "./dashboardWrapper";

const inter = Inter({ subsets: ["latin"]})

export const metadata: Metadata = {
  title: "KBManage",
  description: "KBs Project Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DashboardWrapper>{children}</DashboardWrapper>
      </body>
    </html>
  );
}
