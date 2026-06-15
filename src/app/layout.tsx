import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AutoBidly — Name Your Lease Price. Dealers Compete.",
  description: "AutoBidly is the lease marketplace where you name your price and verified dealers compete for your business. See the best vehicles to lease right now, browse verified deals, or submit a BidLock™ in minutes. Launching in Metro Detroit.",
  keywords: "car lease deals, best vehicles to lease, lease intelligence score, car lease marketplace, name your lease price, BidLock, auto lease Metro Detroit, best SUV to lease, best truck to lease, lease deals near me",
  openGraph: {
    title: "AutoBidly — Name Your Lease Price. Dealers Compete.",
    description: "Submit the exact vehicle and payment you want. Verified dealers compete. First to accept is locked in. No negotiating. No games.",
    url: "https://autobidly.vercel.app",
    siteName: "AutoBidly",
    type: "website",
    images: [
      {
        url: "https://autobidly.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "AutoBidly — Name Your Lease Price",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoBidly — Name Your Lease Price. Dealers Compete.",
    description: "Submit the exact vehicle and payment you want. Verified dealers compete. First to accept is locked in.",
    images: ["https://autobidly.vercel.app/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://autobidly.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "AutoBidly",
              "description": "AutoBidly is a two-sided car lease marketplace where buyers name their price and verified dealers compete for their business.",
              "url": "https://autobidly.vercel.app",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://autobidly.vercel.app/deals?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AutoBidly LLC",
              "url": "https://autobidly.vercel.app",
              "logo": "https://autobidly.vercel.app/autobidly-icon.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "info@autobidly.com",
                "contactType": "customer service"
              },
              "areaServed": {
                "@type": "City",
                "name": "Metro Detroit"
              },
              "description": "AutoBidly is the lease marketplace where you name your price and dealers compete. Submit a BidLock™ for any vehicle and let verified dealers fight for your business."
            })
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}