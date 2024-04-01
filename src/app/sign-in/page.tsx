'use client'
import React, { FormEvent, useState } from 'react';
import signInCredential from '../firebase/auth/signIn';
import { useRouter } from 'next/navigation'

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter()

  async function handleSignIn(event: FormEvent) {
    event.preventDefault()

    const result = await signInCredential(email, password)

    if (result) {
      setEmail('')
      setPassword('')
      router.push('/')
    }

  };

  return (
    <div className="py-20 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h2 className="text-2xl font-semibold text-white mb-4">Sign In</h2>
        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 px-3 py-2 block w-full rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-300">Password</label>
            <input
              type="password"
              id="password"
              className="mt-1 px-3 py-2 block w-full rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button disabled={email === '' || password === ''} type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 disabled:cursor-not-allowed disabled:bg-blue-800">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};
