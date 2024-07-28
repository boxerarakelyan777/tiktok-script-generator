// src/app/ai/page.tsx
"use client";

import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AiTool = () => {
  const [idea, setIdea] = useState('');
  const [script, setScript] = useState('');
  const [loading, setLoading] = useState(false);

  const generateScript = async () => {
    setLoading(true);
    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ idea }),
    });

    const data = await res.json();
    setScript(data.script);
    setLoading(false);
  };

  return (
    <>
      <Header />
      <div className="ai-tool">
        <h1>Generate Your TikTok Script</h1>
        <textarea
          placeholder="Enter your video idea"
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
        />
        <button onClick={generateScript} disabled={loading}>
          {loading ? 'Generating...' : 'Generate Script'}
        </button>
        {script && (
          <div>
            <h2>Generated Script</h2>
            <p>{script}</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default AiTool;
