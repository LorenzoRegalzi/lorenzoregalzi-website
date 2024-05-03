import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Logo from '../public/next.svg'; // Assicurati di aggiungere il tuo logo in assets


const HomePage = () => {
  return (
    <>
      <Head>
        <title>Lorenzo Regalzi - Sviluppatore Frontend e Backend | Next.js, React, Node.js</title>
        <meta name="description" content="Sono Lorenzo Regalzi, uno sviluppatore frontend e backend specializzato in Next.js, React e Node.js. Scopri i miei servizi e contattami per realizzare il tuo progetto web." />
        <meta name="keywords" content="Lorenzo Regalzi, sviluppatore frontend, sviluppatore backend, Next.js, React, Node.js, progetti web" />
        <meta name="author" content="Lorenzo Regalzi" />
        <link rel="canonical" href="https://www.lorenzoregalzi.com" />
      </Head>
      <div className="container"> {/* Applica la classe CSS container */}
        <header>
          <Image src={Logo} alt="Lorenzo Regalzi Logo" width={200} height={100} />
          <h1 className="title">Sviluppatore Frontend e Backend</h1>
          <p className="subtitle">Specializzato in Next.js, React e Node.js</p>
        </header>
        <main>
          <section>
            <h2>I miei servizi</h2>
            <p>Creo soluzioni web personalizzate e di alta qualità. Mi occupo di:</p>
            <ul>
              <li>Progettazione e sviluppo di siti web reattivi e user-friendly utilizzando Next.js, React e altri framework frontend</li>
              <li>Creazione di API robuste e scalabili con Node.js e Express per supportare le applicazioni frontend e mobile</li>
              <li>Sviluppo di applicazioni web e mobile basate su database relazionali e non relazionali</li>
              <li>Ottimizzazione delle prestazioni e della sicurezza del sito web per garantire una migliore esperienza utente</li>
              <li>Mantenimento e aggiornamento continuo delle applicazioni per adattarsi ai cambiamenti nel panorama tecnologico</li>
            </ul>
          </section>
          <section>
            <h2>Progetti recenti</h2>
            <p>Scopri alcuni dei progetti recenti in cui ho collaborato:</p>
            <div className="projectGrid"> {/* Aggiungi la classe CSS projectGrid */}
              {/* Aggiungi qui una galleria o una lista dei tuoi progetti recenti */}
            </div>
          </section>
          <section>
            <h2>Contattami</h2>
            <p>Hai un progetto interessante e cerchi un partner tecnologico? Contattami per discutere dei dettagli.</p>
            <a href="mailto:info@lorenzoregalzi.com" className="contactLink">lorenzo.regalzi@gmail.com</a>
          </section>
        </main>
        <footer>
          <p>© 2024 Lorenzo Regalzi. Tutti i diritti riservati.</p>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
