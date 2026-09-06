import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import MuscadineBanner from '@/src/components/MuscadineBanner';
import MuscadineFooter from '@/src/components/MuscadineFooter';
import ErrorBoundary from '@/src/components/ErrorBoundary';
import ScrollToTop from '@/src/components/ScrollToTop';
import DeferredAnalytics from '@/src/components/DeferredAnalytics';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#f59e0b',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://muscadine.xyz'),
  title: 'Muscadine Labs',
  description: 'Empowering financial freedom through Bitcoin security and decentralized finance.',
  keywords: 'DeFi, Bitcoin, Base, Morpho, vault, yield, crypto, finance, self-sovereignty, dashboard',
  authors: [{ name: 'Muscadine Labs' }],
  openGraph: {
    title: 'Muscadine Labs',
    description: 'Empowering financial freedom through Bitcoin security and decentralized finance.',
    type: 'website',
    url: 'https://muscadine.xyz',
    siteName: 'Muscadine Labs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muscadine Labs',
    description: 'Empowering financial freedom through Bitcoin security and decentralized finance.',
    creator: '@muscadinelabs',
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: '/manifest.json',
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'Muscadine Labs',
              url: 'https://muscadine.xyz',
              description: 'Empowering financial freedom through Bitcoin security and decentralized finance.',
              applicationCategory: 'FinanceApplication',
              operatingSystem: 'Web Browser',
              author: {
                '@type': 'Organization',
                name: 'Muscadine Labs',
                url: 'https://x.com/muscadinelabs',
              },
            }),
          }}
        />
      </head>
      <body className="bg-gray-50 antialiased">
        <ErrorBoundary>
          <DeferredAnalytics />
          <ScrollToTop />
          <div className="min-h-screen bg-gray-50 flex flex-col overflow-x-hidden">
            <MuscadineBanner />
            <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8 w-full">
              {children}
            </main>
            <MuscadineFooter />
          </div>
        </ErrorBoundary>
      </body>
    </html>
  );
}

