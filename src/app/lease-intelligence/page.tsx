import type { Metadata } from "next";
import LeaseIntelligenceClient from "./client";

const now = new Date();
const monthName = now.toLocaleString('default', { month: 'long' });
const year = now.getFullYear();

export const metadata: Metadata = {
  title: `Best Vehicles to Lease in ${monthName} ${year} — AutoBidly Lease Intelligence Score™`,
  description: `AutoBidly's Lease Intelligence Score ranks every vehicle by how good the lease deal is right now based on manufacturer incentives, dealer inventory, and market timing. Updated ${monthName} ${year}.`,
  keywords: "best car to lease right now, best SUV to lease, best truck to lease, lease intelligence score, car lease deals, best vehicle lease deals, AutoBidly",
  openGraph: {
    title: `Best Vehicles to Lease in ${monthName} ${year} — AutoBidly Lease Intelligence Score™`,
    description: "See which vehicles have the best lease deals right now based on manufacturer incentives, inventory levels, and market timing.",
    url: "https://autobidly.vercel.app/lease-intelligence",
    siteName: "AutoBidly",
    type: "article",
  },
  alternates: {
    canonical: "https://autobidly.vercel.app/lease-intelligence",
  },
};

export default function LeaseIntelligencePage() {
  return <LeaseIntelligenceClient />;
}