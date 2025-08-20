import type { Metadata } from "next";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

import { theme } from "@/utils/mantine-theme";
import "./globals.css";
import { SpaceGrotesk } from "@/app/lib/fonts";

export const metadata: Metadata = {
  title: "Segsalerty Talent Support Initiative | Nurturing Gifted Tech Talents",
  description:
    "Segsalerty is a nonprofit tech talent community focused on nurturing gifted minds in Nigeria through mentorship, financial support, and meaningful connections—helping emerging tech professionals reach world-class levels",
  keywords: [
    // Core Brand Keywords
    "Segsalerty",
    "Segsalerty Talent Support Initiative",
    "Segsalerty Nigeria",
    "Segsalerty tech community",

    // Program & Services Keywords
    "tech talent support Nigeria",
    "tech mentorship program",
    "rising stars program tech",
    "mid-level accelerator Nigeria",
    "tech leaders circle",
    "software engineering mentorship",
    "developer support initiative",

    // Audience & Mission Keywords
    "nurturing tech talents",
    "empowering young developers Nigeria",
    "support for tech professionals",
    "community for software developers",
    "tech ecosystem Lagos",
    "talent incubator Nigeria",

    // Value-Based Keywords
    "mentorship and financial support tech",
    "build tech career Nigeria",
    "support for young coders",
    "access to laptops and internet for tech talent",
    "bridging the gap for tech developers",

    // Broader SEO Keywords (Long-tail)
    "how to become a software developer in Nigeria",
    "mentorship programs for young developers",
    "financial support for tech students Nigeria",
    "tech career growth accelerator",
    "leadership programs for tech professionals",
  ],
  metadataBase: new URL("https://segsalerty.com"),
  authors: [{ name: "Segsalerty", url: "https://segsalerty.com" }],
  openGraph: {
    title: "Segsalerty Talent Support Initiative",
    description:
      "Segsalerty is a nonprofit tech talent community focused on nurturing gifted minds in Nigeria through mentorship, financial support, and meaningful connections—helping emerging tech professionals reach world-class levels",
    url: "https://segsalerty.com",
    siteName: "Segsalerty Talent Support Initiative",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Segsalerty",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Segsalerty",
    description:
      "Segsalerty is a nonprofit tech talent community focused on nurturing gifted minds in Nigeria through mentorship, financial support, and meaningful connections—helping emerging tech professionals reach world-class levels",
    images: ["/og-image.jpg"],
    site: "@SegsalertyTS",
    creator: "@SegsalertyTS",
  },
  other: {
    "og:see_also": [
      "https://www.linkedin.com/company/segsalerty/",
      "https://x.com/SegsalertyTS",
      "https://www.instagram.com/segsalertyts/",
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
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
