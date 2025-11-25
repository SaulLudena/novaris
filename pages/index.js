import Head from "next/head";
import Topnav from "../src/components/topnav/topnav";
import Hero from "../src/components/hero/hero";
import Values from "../src/components/values/values";
import Ourservices from "../src/components/ourservices/ourservices";
import Ourteam from "../src/components/ourteam/ourteam";
import Comments from "../src/components/comments/comments";
import Contact from "../src/components/contact/contact";
import Footer from "@/src/components/footer/footer";
export default function Home() {
  return (
    <>
      <Head>
        <title>Novaris - Clínica dental</title>

        <meta
          name="description"
          content="Novaris es una clínica odontológica en Lima especializada en estética dental, implantes, ortodoncia, endodoncia y rehabilitación oral. Atención profesional y tecnología moderna para cuidar tu sonrisa."
        />
        <meta
          name="keywords"
          content="clínica dental, dentista en Lima, odontología, implantes dentales, ortodoncia, estética dental, carillas, blanqueamiento dental, endodoncia, rehabilitación oral, Novaris"
        />

        <meta name="author" content="Clínica Odontológica Novaris" />
        <link rel="icon" href="/favicon.ico" />

        {/* OPEN GRAPH */}
        <meta property="og:title" content="Novaris - Clínica Odontológica" />
        <meta
          property="og:description"
          content="Expertos en estética dental, ortodoncia e implantes. Tu sonrisa en manos profesionales."
        />
        <meta property="og:image" content="/img/Logo.png" />
        <meta property="og:url" content="https://novaris.pe" />
        <meta property="og:type" content="website" />

        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Novaris - Clínica Odontológica" />
        <meta
          name="twitter:description"
          content="Cuidado dental profesional con tecnología moderna."
        />
        <meta name="twitter:image" content="/img/Logo.png" />

        {/* SEO AVANZADO - SCHEMA.ORG */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              name: "Clínica Odontológica Novaris",
              image: "https://novaris.pe/img/Logo.png",
              url: "https://novaris.pe",
              telephone: "+51 999 999 999",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Av. Ejemplo 123",
                addressLocality: "Lima",
                addressRegion: "Lima",
                addressCountry: "PE",
              },
              description:
                "Clínica odontológica especializada en estética dental, implantes y ortodoncia.",
              openingHours: "Mo-Sa 09:00-20:00",
              priceRange: "$$",
            }),
          }}
        />
      </Head>
      <Topnav />
      <Hero />
      <Values />
      <Ourservices />
      <Ourteam />
      <Comments />
      <Contact />
      <Footer />
    </>
  );
}
