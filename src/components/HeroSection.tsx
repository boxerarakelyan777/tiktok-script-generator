// src/components/HeroSection.tsx
"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { db } from '../firebaseConfig';
import { collection, query, where, getDocs, addDoc } from 'firebase/firestore';

const HeroSection = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const q = query(collection(db, 'users'), where('email', '==', email));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      try {
        await addDoc(collection(db, 'users'), {
          name,
          lastName,
          email,
          timestamp: new Date(),
        });
        localStorage.setItem('submissionToken', 'true');
        setSubmitted(true);
        router.push('/ai');
      } catch (e) {
        console.error('Error adding document: ', e);
      }
    } else {
      alert('This email has already been submitted.');
    }
  };

  return (
    <section className="hero">
      <h1>Welcome to Scriptinite</h1>
      <p>Your Ultimate TikTok AI Script Generator</p>
      {submitted ? (
        <p>Thank you for submitting your information!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </section>
  );
};

export default HeroSection;
