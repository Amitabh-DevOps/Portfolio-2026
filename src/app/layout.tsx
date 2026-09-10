import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amitabh.cloud"),
  title: "Amitabh Soni | DevOps Engineer",
  description: "Personal portfolio of Amitabh Soni, a DevOps Engineer specializing in Kubernetes, AWS, and GitOps.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Amitabh Soni | DevOps Engineer",
    description: "Building resilient, automated infrastructure for modern digital ecosystems.",
    url: "https://amitabh.cloud",
    siteName: "Amitabh Soni Portfolio",
    images: [
      {
        url: "/profile-pic.jpeg", // Using the profile image as the preview for now
        width: 1200,
        height: 630,
        alt: "Amitabh Soni - DevOps Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amitabh Soni | DevOps Engineer",
    description: "Building resilient, automated infrastructure for modern digital ecosystems.",
    creator: "@Amitabh_DevOps",
    images: ["/profile-pic.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "Amitabh Soni",
        url: "https://amitabh.cloud/",
        jobTitle: "Cloud and DevOps Engineer",
        description: "Cloud and DevOps Engineer specializing in AWS, Kubernetes, infrastructure automation, and GitOps.",
        sameAs: [
          "https://github.com/Amitabh-DevOps",
          "https://www.linkedin.com/in/amitabh-devops",
          "https://x.com/Amitabh_DevOps",
          "https://www.youtube.com/@SoniAmitabh",
          "https://blog.amitabh.cloud/",
        ],
      },
      {
        "@type": "WebSite",
        name: "Amitabh Soni Portfolio",
        url: "https://amitabh.cloud/",
      },
      {
        "@type": "ItemList",
        name: "Featured Projects",
        itemListElement: [
          {
            "@type": "SoftwareSourceCode",
            position: 1,
            name: "SecureShip Dashboard on AWS ECS",
            codeRepository: "https://github.com/Amitabh-DevOps/deploy-to-ecs",
            programmingLanguage: ["JavaScript", "Docker"],
          },
          {
            "@type": "SoftwareSourceCode",
            position: 2,
            name: "GitOps on AWS EKS with Monitoring",
            codeRepository: "https://github.com/Amitabh-DevOps/GitOps-with-monitoring",
            programmingLanguage: ["JavaScript", "HCL", "Dockerfile"],
          },
        ],
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <Analytics />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
