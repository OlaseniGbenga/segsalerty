import type { Metadata } from "next";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

import { theme } from "@/utils/mantine-theme";
import "./globals.css";
import {  SpaceGrotesk } from "@/app/lib/fonts";

import { BasicAppShell } from "@/component/layout/AppShell";

export const metadata: Metadata = {
  title: "Business Gator | Smart Financial Systems & Grant Strategy",
  description:
    "Business Gator helps mission-driven organizations build smart financial systems, secure grants, and grow with clarity. Discover funding strategies, cash flow tools, and purpose-driven budgeting.",
  keywords: [
    "Business Gator",
    "Grant strategy Nigeria",
    "Financial systems for NGOs",
    "Nonprofit budgeting",
    "Funding for mission-driven businesses",
    "Cash flow management",
    "Grant writing support",
    "Financial clarity for social impact",
  ],
  metadataBase: new URL("https://www.businessgator.com.ng"),
  authors: [
    { name: "Business Gator", url: "https://www.businessgator.com.ng" },
  ],
  openGraph: {
    title: "Business Gator | Smart Financial Systems & Grant Strategy",
    description:
      "We build smart financial systems for mission-driven businesses, nonprofits, and founders who want clarity and funding success.",
    url: "https://www.businessgator.com.ng",
    siteName: "Business Gator",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Business Gator - Grant & Financial Strategy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Gator",
    description:
      "Smart financial systems, grant discovery, and funding strategy for mission-driven orgs.",
    images: ["/og-image.jpg"],
    site: "@businessgator",
    creator: "@businessgator",
  },
  other: {
    "og:see_also": [
      "https://www.instagram.com/businessgator",
      "https://www.facebook.com/businessgator",
      "https://www.linkedin.com/company/businessgator",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={SpaceGrotesk.variable}>
        <MantineProvider theme={theme}>
          <BasicAppShell>{children}</BasicAppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
