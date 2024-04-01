'use client'
import Image from "next/image"
import photo1 from '../assets/photos/photo1.png'
import photo2 from '../assets/photos/photo2.png'
import photo3 from '../assets/photos/photo3.png'
import photo4 from '../assets/photos/photo4.png'
import photo5 from '../assets/photos/photo5.png'
import photo6 from '../assets/photos/photo6.png'

import { AuthContext } from '@/app/context/AuthContext'
import { useContext } from "react"

export default function Photos() {
  const { isLogged } = useContext(AuthContext)
  const photosArray = [photo1, photo2, photo3, photo4, photo5, photo6]

  if (!isLogged) {
    return (
      <h1 className="text-4xl text-center mb-6">You must log to see the content</h1>
    )
  }

  return (
    <main>
      <h1 className="text-4xl text-center mb-6">Photos</h1>
      <div className="justify-center grid md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-10">
        {
          photosArray.map((photo, index) => {
            return (
              <figure key={index}>
                <Image className="object-contain w-fit h-full" height={200} src={photo} alt={`photo ${index+1}`}/>
                <figcaption>Photo {index + 1}</figcaption>
              </figure>
            )
          })
        }
      </div>
    </main>
  )
}