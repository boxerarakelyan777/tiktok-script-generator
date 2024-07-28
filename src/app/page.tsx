"use client";

import { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'users'), {
        name: name,
        lastName: lastName,
        email: email,
        timestamp: new Date()
      });
      setSubmitted(true);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center h-screen text-center">
        <h1 className="text-4xl mb-6">Welcome to the AI TikTok Script Generator</h1>
        {submitted ? (
          <p className="text-2xl">Thank you for submitting your information!</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <input
              type="text"
              placeholder="First Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 m-2 border rounded"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="p-2 m-2 border rounded"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 m-2 border rounded"
              required
            />
            <button type="submit" className="p-2 m-2 bg-blue-500 text-white rounded">Submit</button>
          </form>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;
