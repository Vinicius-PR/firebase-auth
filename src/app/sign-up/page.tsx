'use client'
import { FormEvent, useState } from 'react';
import signUpCredential from '../firebase/auth/signUp';
import { useRouter } from 'next/navigation';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter()

  async function handleSignUp(event: FormEvent) {
    event.preventDefault()
    if (password !== confirmPassword) {
      setError('Senha não são iguais.')
      return
    }
    const result = await signUpCredential(email, password)

    if (result) {
      setEmail('')
      setPassword('')
      setConfirmPassword('')
      setError('')
      router.push('/sign-in')
    }
  };

  return (
    <div className="py-20 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h2 className="text-2xl font-semibold text-white mb-4">Faça seu cadastro</h2>
        <form onSubmit={handleSignUp}>
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
            <label htmlFor="password" className="block text-gray-300">Senha</label>
            <input
              type="password"
              id="password"
              className="mt-1 px-3 py-2 block w-full rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-300">Repita a senha</label>
            <input
              type="password"
              id="confirmPassword"
              className="mt-1 px-3 py-2 block w-full rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:border-blue-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <p className='text-red-600'>{error}</p>
          <button disabled={email === '' || password === ''} type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 disabled:cursor-not-allowed disabled:bg-blue-800">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};
