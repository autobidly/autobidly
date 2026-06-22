import type { Metadata } from "next";
import ModelYearTimingClient from "./client";

const currentYear = new Date().getFullYear();
const previousYear = currentYear - 1;

export const metadata: Metadata = {
  title: `Should You Lease a ${previousYear} or ${currentYear}? — AutoBidly`,
  description: `Is it better to lease last year's model or the current year? The answer depends on manufacturer support, timing, and the specific vehicle. AutoBidly breaks down exactly when leasing a ${previousYear} model saves you money — and when it doesn't.`,
  keywords: `lease ${previousYear} or ${currentYear}, leasing previous model year, is it better to lease last year's model, ${previousYear} vs ${currentYear} lease deal, should I lease older model year, AutoBidly`,
  openGraph: {
    title: `Should You Lease a ${previousYear} or ${currentYear}? — AutoBidly`,
    description: `The answer isn't what most buyers expect. Here's exactly when leasing last year's model saves you money — and when the current year is the smarter move.`,
    url: `https://autobidly.com/insider/model-year-timing`,
    siteName: 'AutoBidly',
    type: 'article',
  },
  alternates: {
    canonical: 'https://autobidly.com/insider/model-year-timing',
  },
};

export default function ModelYearTimingPage() {
  return <ModelYearTimingClient />;
}