'use client';

import Link from 'next/link';
import { FiInstagram, FiTwitter, FiLinkedin, FiFacebook } from 'react-icons/fi';
import { useRef } from 'react';

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);

  // Animation removed (gsap dependency deleted). Footer rendered with CSS transitions.

  return (
    <footer className="bg-white border-t">
      <div ref={footerRef} className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-[#2563EB]">
              <FiInstagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#2563EB]">
              <FiTwitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#2563EB]">
              <FiLinkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#2563EB]">
              <FiFacebook className="h-5 w-5" />
            </a>
          </div>
          <p className="text-sm text-gray-500" style={{ fontFamily: "'Grenze Gotisch', cursive" }}>
            © 2025 RGPV Hub. All rights reserved. Created & Designed by - Sarthak Mishra(❁´◡`❁).
          </p>
          <div className="text-center max-w-3xl">
            <p className="text-xs text-gray-400" style={{ fontFamily: "'Grenze Gotisch', cursive" }}>
              Disclaimer: RGPV Hub is an independent platform providing study materials, notes, syllabus, and other academic resources. We do not claim ownership of any third-party content, including PDFs, documents, or external links. All materials are sourced from publicly available domains or user contributions. If you are a copyright owner and wish to request content removal, please contact us at rgpvhub01@gmail.com. While we strive for accuracy, we do not guarantee the completeness or correctness of the provided information. Users are advised to verify details with official sources.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 