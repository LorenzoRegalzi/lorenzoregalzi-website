import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Logo from '../public/next.svg'; // Assicurati di aggiungere il tuo logo in assets

const Home = () => {
  return (
    <>
      <Head>
        <title>Lorenzo Regalzi - Sviluppatore Frontend e Backend | Next.js, React, Node.js</title>
        <meta name="description" content="Sono Lorenzo Regalzi, uno sviluppatore frontend e backend specializzato in Next.js, React e Node.js. Scopri i miei servizi e contattami per realizzare il tuo progetto web." />
        <meta name="keywords" content="Lorenzo Regalzi, sviluppatore frontend, sviluppatore backend, Next.js, React, Node.js, progetti web" />
        <meta name="author" content="Lorenzo Regalzi" />
        <link rel="canonical" href="https://www.lorenzoregalzi.com" />
      </Head>
      <div className="container mx-auto p-4">
        <header>
          <Image src={Logo} alt="Lorenzo Regalzi Logo" width={200} height={100} />
          <h1 className="text-4xl font-bold text-gray-800 mt-8">Sviluppatore Frontend e Backend</h1>
          <p className="text-lg text-gray-600">Specializzato in Next.js, React e Node.js</p>
        </header>
        <main>
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mt-12">I miei servizi</h2>
            <p className="text-lg text-gray-600">Sono un esperto sviluppatore frontend e backend, in grado di realizzare soluzioni web personalizzate e di alta qualità. I miei servizi includono:</p>
            <ul className="list-disc list-inside text-lg text-gray-600 mt-4">
              <li>Progettazione e sviluppo di siti web reattivi e user-friendly utilizzando Next.js, React e altri framework frontend</li>
              <li>Creazione di API robuste e scalabili con Node.js e Express per supportare le applicazioni frontend e mobile</li>
              <li>Sviluppo di applicazioni web e mobile basate su database relazionali e non relazionali</li>
              <li>Ottimizzazione delle prestazioni e della sicurezza del sito web per garantire una migliore esperienza utente</li>
              <li>Mantenimento e aggiornamento continuo delle applicazioni per adattarsi ai cambiamenti nel panorama tecnologico</li>
            </ul>
          </section>
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mt-12">Progetti recenti</h2>
            <p className="text-lg text-gray-600">Ecco alcuni dei miei progetti recenti che illustrano le mie capacità e il mio approccio allo sviluppo web:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
              {/* Aggiungi qui una galleria o una lista dei tuoi progetti recenti */}
            </div>
          </section>
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mt-12">Contattami</h2>
            <p className="text-lg text-gray-600">Se hai un progetto interessante e hai bisogno di un esperto sviluppatore per realizzarlo, non esitare a contattarmi. Sarei felice di discutere dei dettagli e fornirti una soluzione su misura per le tue esigenze.</p>
            <a href="mailto:info@lorenzoregalzi.com" className="text-blue-500 hover:underline mt-4 block">info@lorenzoregalzi.com</a>
          </section>
        </main>
        <footer className="mt-12 border-t pt-8">
          <p className="text-sm text-gray-500">© 2024 Lorenzo Regalzi. Tutti i diritti riservati.</p>
        </footer>
      </div>
    </>
  );
};

export default Home;
