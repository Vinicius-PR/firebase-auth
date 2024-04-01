'use client'
import Image from "next/image"
import hellParadiseImg from '../assets/hells paradise.jpg'
import userAvatar from '../assets/user.png'
import { useContext, useEffect, useState } from "react"
import Link from "next/link"
import { AuthContext } from '../context/AuthContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, isLogged, logout } = useContext(AuthContext)

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

          <div className="text-xs flex items-center gap-2 ml-5">
            <div>
              <Image width={30} src={userAvatar} alt="User Avatar placeholder" />
            </div>

            <div className="hidden md:block">
              {
                isLogged ? (
                  <>
                    <p>Olá, <strong>{user?.email}</strong></p>
                    <p>Bem vindo. <strong><button onClick={logout} className="uppercase hover:underline">Sair</button></strong></p>
                  </>
                ) : (
                  <>
                    <p>Faça <strong><Link href='/sign-in' className="uppercase hover:underline">Login</Link></strong> ou </p>
                    <p>crie seu <strong><Link href='sign-up' className="uppercase hover:underline">Cadastro</Link></strong> </p>
                  </>
                )
              }
            </div>         
          </div>

        </div>

        <nav className={`${isMenuOpen ? 'scale-100 h-auto' : 'scale-y-0 origin-top h-0'} text-center justify-center transition-all duration-500 overflow-hidden md:hidden`}>
          {
            isLogged ? (
              <p>Olá. <strong>{user?.email}</strong></p>
            ) : (
              <p>Faça o seu Login</p>
            )
          }
          <ul className="text-white p-4 space-y-5">
            <li><Link href="/" className="bg-gray-700 p-2 rounded-lg font-bold transition-all hover:bg-slate-600">Home</Link></li>
            <li><Link href="/about" className="bg-gray-700 p-2 rounded-lg font-bold transition-all hover:bg-slate-600">About</Link></li>
            <li><Link href="/photos" className="bg-gray-700 p-2 rounded-lg font-bold transition-all hover:bg-slate-600">Photos</Link></li>
          </ul>
          {
            isLogged ? (
              <button onClick={logout} className="uppercase bg-orange-400 w-min py-1 px-10 rounded-md">Sair</button>
            ) : (
              <div className="flex flex-col items-center mt-4 gap-4">
                <Link href='/sign-in' className="uppercase bg-red-500 w-min py-1 px-10 rounded-md">Login</Link>
                <Link href='/sign-up' className="uppercase bg-green-600 w-min py-1 px-10 rounded-md">Cadastro</Link>
              </div>
            )
          }
        </nav>
      </header>
    </>
  )
}