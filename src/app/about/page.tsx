'use client'
import gabimaruImg from "@/app/assets/gabimaru.png"
import sagiriImg from "@/app/assets/sagiri.png"

import Image from "next/image"
import Link from "next/link"

import { AuthContext } from '@/app/context/AuthContext'
import { useContext } from "react"

export default function About() {

  const { isLogged } = useContext(AuthContext)

  if (!isLogged) {
    return (
      <h1 className="text-4xl text-center mb-6">You must log to see the content</h1>
    )
  }

  return (
    <main>
      <article className="space-y-3">
        <h1 className="text-4xl text-center mb-6">Hell's Paradise: Jigokuraku</h1>
        <h2 className="text-3xl">Anime</h2>

        <p>
          An anime television series adaptation was announced by Weekly Shōnen Jump in January 2021. It is produced by <strong>MAPPA</strong> and directed by Kaori Makita, with Akira Kindaichi writing the scripts, Koji Hisaki designing the characters, and Yoshiaki Dewa composing the music. The series aired from April 1 to July 1, 2023, on TV Tokyo and other networks. The opening theme song is "Work" by Ringo Sheena and Millennium Parade, while the ending theme song is "Kamihitoe" by Uru. Crunchyroll has licensed the series for streaming in America, Europe, Africa, Oceania, the Middle East, and CIS, while Netflix has licensed the series in Asia Pacific (excluding Mainland China, Australia, New Zealand).
          <br/>
          A second season was announced after the airing of the thirteenth episode.
        </p>

        <h2 className="text-3xl">List of Episodes. Seasson 1:</h2>
        <ol className="list-decimal pl-12">
          <li>
            The Death Row Convict and the Executioner. <strong>Original air date:</strong> 
            <span className="italic"> April 1, 2023</span>
          </li>
          <li>
            Screening and Choosing. <strong>Original air date:</strong> 
            <span className="italic"> April 8, 2023</span>
          </li>
          <li>
            Weakness and Strength. <strong>Original air date:</strong> 
            <span className="italic"> April 15, 2023</span>
          </li>
          <li>
            Hell and Paradise. <strong>Original air date:</strong> 
            <span className="italic"> April 22, 2023</span>
          </li>
          <li>
            The Samurai and the Woman. <strong>Original air date:</strong> 
            <span className="italic"> April 29, 2023</span>
          </li>
          <li>
            Heart and Reason. <strong>Original air date:</strong> 
            <span className="italic"> May 6, 2023</span>
          </li>
          <li>
            Flowers and Offerings. <strong>Original air date:</strong> 
            <span className="italic"> May 13, 2023</span>
          </li>
          <li>
            Student and Master. <strong>Original air date:</strong> 
            <span className="italic"> May 20, 2023</span>
          </li>
          <li>
            Gods and People. <strong>Original air date:</strong> 
            <span className="italic"> June 3, 2023</span>
          </li>
          <li>
            Yin and Yang. <strong>Original air date:</strong> 
            <span className="italic"> June 10, 2023</span>
          </li>
          <li>
            Weak and Strong. <strong>Original air date:</strong> 
            <span className="italic"> June 17, 2023</span>
          </li>
          <li>
            Umbrella and Ink. <strong>Original air date:</strong> 
            <span className="italic"> June 24, 2023</span>
          </li>
          <li>
            Dreams and Reality. <strong>Original air date:</strong> 
            <span className="italic"> July 1, 2023</span>
          </li>
        </ol>

        <h2 className="text-3xl">Main characters</h2>
        <h3 className="text-2xl">Gabimaru</h3>
        <Image width={200} src={gabimaruImg} alt="Gabimaru"/>
        <p>
          The strongest ninja from Iwagakure, where he was taken from his parents as a child by the village chief and trained to become a killer. He is known as "Gabimaru the Hollow" (がらんの画眉丸, Garan no Gabimaru) for his lack of emotion during his gruesome work. However, he is very much in love with his wife, the village chief's peace-loving daughter who treats him with kindness. When he wanted to cut ties with the village and live a normal life with his wife, the chief arranged for him to be captured and sentenced to death.
        </p>

        <h3 className="text-2xl">Sagiri</h3>
        <Image width={200} src={sagiriImg} alt="Sagiri"/>
        <p>
          A master swordswoman from the famed Yamada Asaemon family of executioners, where she is one of the only two female executioners in the clan. She recruits Gabimaru for the expedition after seeing his talent and strong will to live. Sagiri is ranked last, 12th, in the Yamada Asaemon hierarchy.
        </p>
        <footer>
          <p>
            <strong>Source:</strong> <Link className="bg-gray-500 text-white p-1 rounded-lg hover:brightness-75" href={'https://en.wikipedia.org/wiki/Hell%27s_Paradise:_Jigokuraku'} target="_blank" >Wikipedia</Link>
          </p>
        </footer>
      </article>
    </main>
  )
}