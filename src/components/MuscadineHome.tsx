'use client';

import { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const IsometricNodes = dynamic(() => import('./IsometricNodes'), { ssr: false });
const PolyhedronShape = dynamic(() => import('./3DShapes/PolyhedronShape'), { ssr: false });
const StarShape = dynamic(() => import('./3DShapes/StarShape'), { ssr: false });
const TorusShape = dynamic(() => import('./3DShapes/TorusShape'), { ssr: false });
const PyramidShape = dynamic(() => import('./3DShapes/PyramidShape'), { ssr: false });
const PixelBlast = dynamic(() => import('./PixelBlast'), { ssr: false });

const CountUpAnimation = ({ target, duration = 2000, suffix = '', prefix = '' }: { 
  target: number; 
  duration?: number; 
  suffix?: string; 
  prefix?: string; 
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let started = false;

    const startCountUp = () => {
      const startTime = performance.now();
      const animate = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(target * easeOutQuart));
        if (progress < 1) {
          raf = requestAnimationFrame(animate);
        } else {
          setCount(target);
        }
      };
      raf = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          setIsVisible(true);
          startCountUp();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [duration, target]);

  const formatNumber = (num: number) => {
    if (target >= 1000000) {
      const millions = num / 1000000;
      return Number.isInteger(millions) ? String(millions) : millions.toFixed(1);
    }
    if (target >= 1000) {
      return (num / 1000).toFixed(0);
    }
    return num.toString();
  };

  const needsSmallUnit = target >= 1000;
  const unit = target >= 1000000 ? 'M' : target >= 1000 ? 'K' : '';

  return (
    <div ref={ref} className="flex-1">
      <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 mb-2 font-serif">
        {prefix && (
          <span className="text-3xl sm:text-4xl lg:text-5xl">{prefix}</span>
        )}
        {isVisible ? formatNumber(count) : '0'}
        {needsSmallUnit && (
          <span className="text-3xl sm:text-4xl lg:text-5xl">{unit}</span>
        )}
        {suffix && (
          <span className="text-3xl sm:text-4xl lg:text-5xl">{suffix}</span>
        )}
      </h2>
    </div>
  );
};

const MuscadineHome = () => {
  return (
    <>
      {/* Hero Section - Full Width Background */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen mt-20 mb-20 overflow-x-clip">
        {/* Nested rectangles effect - hidden on mobile; frames step outward from main content on desktop */}
        <div className="absolute inset-0 hidden lg:flex items-center justify-center z-10 pointer-events-none">
          {/* Rectangle 4 - outermost frame (wider than main content) */}
          <div className="w-full max-w-[1240px] h-[780px] border-2 border-black rounded-lg" />
        </div>
        <div className="absolute inset-0 hidden lg:flex items-center justify-center z-20 pointer-events-none">
          {/* Rectangle 3 */}
          <div className="w-full max-w-[1196px] h-[740px] border-2 border-black rounded-lg" />
        </div>
        <div className="absolute inset-0 hidden lg:flex items-center justify-center z-30 pointer-events-none">
          {/* Rectangle 2 - innermost frame, fits around main content (1152px) */}
          <div className="w-full max-w-[1168px] h-[700px] border-2 border-black rounded-lg" />
        </div>
        
        {/* Main hero container - max-w-6xl = 1152px, fits inside innermost frame */}
        <div className="relative py-8 px-4 sm:py-12 sm:px-8 lg:py-20 lg:px-20 mx-auto max-w-6xl border-2 border-black rounded-lg z-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight font-serif">
              Take the First Step. <span className=" underline">Confidently.</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              We're here to make sure your crypto journey is safe and secure. From Bitcoin self-custody to DeFi protocols, we provide expert guidance and institutional-grade security solutions that protect your digital assets through proper education and secure practices.
            </p>
          </div>

          {/* Right side - 3D Animation */}
          <div className="flex items-center justify-center">
            <div className="w-full min-h-[300px] h-[300px] sm:h-[400px] lg:min-w-[400px] lg:h-[500px]">
              <IsometricNodes />
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Stats & Solutions Section - Full Width Background with Gradient - Break out of container */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-x-hidden bg-linear-to-b from-gray-50 via-blue-50 to-gray-50 py-12 md:py-20 my-12 md:my-16">
        {/* Stats Section */}
        <div className="max-w-6xl mx-auto px-4 mb-16 md:mb-32">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center">
              {/* Stat 1 - Clients */}
              <div className="flex-1">
                <CountUpAnimation 
                  target={12} 
                  duration={1500} 
                  suffix="+" 
                />
                <p className="text-lg text-gray-600">
                  clients advised
                </p>
              </div>
              
              {/* Stat 2 - Assets */}
              <div className="flex-1">
                <CountUpAnimation 
                  target={15000000} 
                  duration={2000} 
                  prefix="$" 
                  suffix="+" 
                />
                <p className="text-lg text-gray-600">
                  in assets secured
                </p>
              </div>
              
              {/* Stat 3 - Security */}
              <div className="flex-1">
                <CountUpAnimation 
                  target={100} 
                  duration={1000} 
                  suffix="%" 
                />
                <p className="text-lg text-gray-600">
                  security record
                </p>
              </div>
          </div>
        </div>

        {/* Our Solutions Section */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6 font-serif">
              Our Solutions
            </h2>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Service 1 - Our App (Top Left) */}
            <div className="bg-white rounded-lg border-2 border-gray-200 p-6 sm:p-8 hover:border-gray-400 hover:scale-105 transition-all duration-300 ease-in-out">
              <div className="space-y-6">
                {/* 3D Shape Container */}
                <div className="w-full h-48 bg-gray-50 rounded-lg border border-gray-200">
                  <PyramidShape path="https://app.muscadine.xyz" />
                </div>
                
                <h3 className="text-2xl font-light text-gray-900 font-serif">
                  Our App
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Access our Morpho vaults on Base for secure yield on USDC, Bitcoin, and Ethereum. Built for financial freedom with flexible deposits/withdrawals of any amount, anytime.
                </p>
                <a 
                  href="https://app.muscadine.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  Launch App
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Service 2 - Bitcoin Node (Top Right) */}
            <div className="bg-white rounded-lg border-2 border-gray-200 p-6 sm:p-8 hover:border-gray-400 hover:scale-105 transition-all duration-300 ease-in-out">
              <div className="space-y-6">
                {/* 3D Shape Container */}
                <div className="w-full h-48 bg-gray-50 rounded-lg border border-gray-200">
                  <TorusShape path="/node" />
                </div>
                
                <h3 className="text-2xl font-light text-gray-900 font-serif">
                  Bitcoin Node
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Connect to our self-hosted Bitcoin node for secure transactions and enhanced privacy. Access a full Bitcoin node for verification and transaction broadcasting.
                </p>
                <Link 
                  href="/node"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  Connect to our Bitcoin Node
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Service 3 - Self Custody (Bottom Left) */}
            <div className="bg-white rounded-lg border-2 border-gray-200 p-6 sm:p-8 hover:border-gray-400 hover:scale-105 transition-all duration-300 ease-in-out">
              <div className="space-y-6">
                {/* 3D Shape Container */}
                <div className="w-full h-48 bg-gray-50 rounded-lg border border-gray-200">
                  <StarShape path="/self-custody" />
                </div>
                
                <h3 className="text-2xl font-light text-gray-900 font-serif">
                  Self Custody
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Complete control of your digital assets through Bitcoin security and DeFi strategies. Learn secure wallet management, hardware setup, and risk-aware approaches to decentralized finance.
                </p>
                <Link 
                  href="/self-custody"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  Learn Self Custody
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Service 4 - Portfolio (Bottom Right) */}
            <div className="bg-white rounded-lg border-2 border-gray-200 p-6 sm:p-8 hover:border-gray-400 hover:scale-105 transition-all duration-300 ease-in-out">
              <div className="space-y-6">
                {/* 3D Shape Container */}
                <div className="w-full h-48 bg-gray-50 rounded-lg border border-gray-200">
                  <PolyhedronShape path="https://portfolio.muscadine.xyz" />
                </div>
                
                <h3 className="text-2xl font-light text-gray-900 font-serif">
                  Portfolio
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Track, manage, and plan your net worth, assets, liabilities, cash, and more. A unified view of your financial picture to help you make informed decisions.
                </p>
                <a 
                  href="https://portfolio.muscadine.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  Open Portfolio
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Analytics Section */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-x-hidden">
        <div className="absolute inset-0 bg-gray-900" 
             style={{ clipPath: 'polygon(0 10%, 100% 0%, 100% 100%, 0% 100%)' }}>
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <PixelBlast />
          </div>
        </div>
        <div className="relative py-16 md:py-20 mt-12 md:mt-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-light text-white mb-4 font-serif">
              Analytics
            </h2>
            <p className="text-gray-200 leading-relaxed mb-6">
              Explore metrics and dashboards at{' '}
              <a 
                href="https://analytics.muscadine.xyz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white font-medium underline underline-offset-2 hover:no-underline"
              >
                analytics.muscadine.xyz
              </a>
            </p>
            <a 
              href="https://analytics.muscadine.xyz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-sm"
            >
              Open Analytics
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MuscadineHome;
