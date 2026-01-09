import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FDA Tobacco & Vape Regulatory Consulting | PMTA Experts | JJCC Group',
  description: 'Expert FDA regulatory strategy for Tobacco, Vape & Nicotine products. PMTA submission support, warning letter response, and quality management systems. Get approved fast.',
  keywords: 'PMTA, FDA tobacco compliance, vape regulatory consulting, tobacco regulatory services, ENDS compliance, FDA warning letter, quality management system, regulatory compliance consulting, tobacco manufacturing QMS',
  openGraph: {
    title: 'FDA Tobacco & Vape Regulatory Consulting | JJCC Group',
    description: 'Don\'t let your PMTA application get rejected. Proven FDA compliance strategies for tobacco, vape, and nicotine products.',
    type: 'website',
    url: 'https://jjccgroup.org/tobacco',
    images: [
      {
        url: '/images/og-tobacco.jpg',
        width: 1200,
        height: 630,
        alt: 'JJCC Group - FDA Tobacco & Vape Regulatory Experts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FDA Tobacco & Vape Regulatory Consulting | JJCC Group',
    description: 'Expert PMTA submission support and FDA compliance consulting for tobacco and vape companies.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TobaccoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
