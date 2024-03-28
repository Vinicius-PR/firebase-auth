'use client'
import Image from "next/image"
import hellParadiseImg from '../assets/hells paradise.jpg'
import { useEffect, useState } from "react"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = (e:any) => {
      if (e.target.innerWidth > 768) {
        setIsMenuOpen(false)
      }
    };

    // Event listener for window resize
    window.addEventListener('resize', (e) => handleResize(e));

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <header className="bg-gray-800 py-4 text-white">

        <div className="container mx-auto flex items-center px-4">

          <Link className="flex-1" href='/'> 
            <Image width={50} src={hellParadiseImg} alt="Logo Image"/>
          </Link>

          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li><Link href="/" className="bg-gray-700 p-2 rounded-lg font-bold transition-all hover:bg-slate-600">Home</Link></li>
              <li><Link href="/about" className="bg-gray-700 p-2 rounded-lg font-bold transition-all hover:bg-slate-600">About</Link></li>
              <li><Link href="/photos" className="bg-gray-700 p-2 rounded-lg font-bold transition-all hover:bg-slate-600">Photos</Link></li>
            </ul>
          </nav>

          <div className="md:hidden flex">
            {
              isMenuOpen ? (
                <button onClick={() => setIsMenuOpen(false)} className=" focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              ) : (
                <button onClick={() => setIsMenuOpen(true)} className="focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                  </svg>
                </button>
              )
            }
          </div>

          <div className="ml-5">
            <div className="container mx-auto flex justify-between items-center px-4">
              <div>
                <img src="/logo.png" alt="Logo" className="h-8" />
              </div>
              <nav>
                <ul className="flex space-x-4">
                  <li>
                    <Link className="hover:text-gray-300" href="/ login">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-gray-300" href="/create-account">
                      Create Account
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

        </div>

        <nav className={`${isMenuOpen ? 'scale-100 h-auto' : 'scale-y-0 origin-top h-0'} transition-all duration-500 overflow-hidden md:hidden`}>
          <ul className="text-white text-center p-4 space-y-5">
            <li><Link href="/" className="bg-gray-700 p-2 rounded-lg font-bold transition-all hover:bg-slate-600">Home</Link></li>
            <li><Link href="/about" className="bg-gray-700 p-2 rounded-lg font-bold transition-all hover:bg-slate-600">About</Link></li>
            <li><Link href="/photos" className="bg-gray-700 p-2 rounded-lg font-bold transition-all hover:bg-slate-600">Photos</Link></li>
          </ul>
        </nav>

        

      </header>
    </>
  )
}