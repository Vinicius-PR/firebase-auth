import Link from "next/link";

export default function Home() {
  return (
    <main>
      <article className="space-y-3">
        <h1 className="text-4xl text-center mb-6">Hell's Paradise: Jigokuraku</h1>
        <p>
          <strong>Hell's Paradise: Jigokuraku</strong> (Japanese: 地獄楽, Hepburn: Jigokuraku) is a Japanese manga series written and illustrated by Yuji Kaku. It was serialized weekly for free on Shueisha's Shōnen Jump+ application and website from January 2018 to January 2021, with its chapters collected in 13 tankōbon volumes. Set in the Edo period of Japan, it follows the ninja Gabimaru and the executioner Yamada Asaemon Sagiri as they search for the elixir of immortality. Viz Media has licensed the series for English release in North America. An anime television series adaptation produced by MAPPA aired from April to July 2023. A second season has been announced.
        </p>

        <h2 className="text-3xl">Plot</h2>
        <p>
          Captured during an assassination mission, Gabimaru the Hollow is sentenced to be executed, but nothing seems to kill him due to his superhuman body. Believing his love for his wife to be subconsciously keeping him alive, executioner Yamada Asaemon Sagiri offers him the chance to be pardoned of all crimes by the Shogunate if he finds the elixir of life on Shinsenkyo, a legendary realm recently discovered southwest of the Ryukyu Kingdom. After losing five expedition teams sent to the island, this time the Shogunate sends a group of death row convicts. The convicts are each given a Yamada Asaemon executioner, who they must return with in order to obtain the pardon
        </p>
        <footer>
          <p>
            <strong>Source:</strong> <Link className="bg-gray-500 text-white p-1 rounded-lg hover:brightness-75" href={'https://en.wikipedia.org/wiki/Hell%27s_Paradise:_Jigokuraku'} target="_blank" >Wikipedia</Link>
          </p>
        </footer>
      </article>
    </main>
  );
}
