"use client";

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800">
      <div className="text-xl font-bold">AI TikTok Script Generator</div>
      <nav className="flex gap-4">
        <Link href="/" legacyBehavior>
          <a className="text-lg">Home</a>
        </Link>
      </nav>
      <button
        onClick={toggleDarkMode}
        className="p-2 bg-blue-500 text-white rounded"
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
};

export default Header;
