// src/components/Header.tsx
"use client";

import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div className="brand">Scriptinite</div>
      <nav>
        <Link href="/" legacyBehavior>
          <a>Home</a>
        </Link>
        <Link href="/ai" legacyBehavior>
          <a>AI Tool</a>
        </Link>
      </nav>
      <a
        href="https://github.com/boxerarakelyan777/tiktok-script-generator"
        target="_blank"
        rel="noopener noreferrer"
        className="github-button"
      >
        GitHub
      </a>
    </header>
  );
};

export default Header;
