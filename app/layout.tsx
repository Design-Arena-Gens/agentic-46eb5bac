import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EU Launch Assessment – Flybird Cat Toy",
  description:
    "Market readiness review, Facebook Ads strategy, and country prioritisation for launching the Flybird cat toy across the EU.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
