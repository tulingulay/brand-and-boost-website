import { Link } from "react-router-dom";

import { LegalContent } from "@/components/LegalContent";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SEO } from "@/components/SEO";

export default function Cookiebeleid() {
  return (
    <>
      <SEO
        title="Cookiebeleid · Brand & Boost"
        description="Het cookiebeleid van Brand & Boost: welke cookies wij gebruiken, waarom, en hoe je je voorkeuren beheert."
        path="/cookiebeleid"
      />

      <PageHero eyebrow="Juridisch" title="Cookiebeleid" />

      <Section>
        <LegalContent updated="26 juni 2026">
          <p>
            Wanneer je de website van Brand &amp; Boost bezoekt, plaatsen wij cookies en vergelijkbare technieken op jouw
            apparaat. In dit cookiebeleid leggen we uit welke cookies wij gebruiken, voor welke doeleinden we dit doen en
            hoe je jouw cookievoorkeuren kunt beheren.
          </p>

          <h2>1. Wat zijn cookies?</h2>
          <p>
            Cookies zijn kleine tekstbestanden die door een website op jouw computer, tablet of smartphone worden
            geplaatst op het moment dat je de website bezoekt. In deze tekstbestanden wordt informatie opgeslagen die bij
            een later bezoek weer kan worden herkend door de website. Waar we in deze verklaring spreken over
            &lsquo;cookies&rsquo;, bedoelen we ook vergelijkbare volgtechnieken, zoals pixels.
          </p>

          <h2>2. Welke cookies gebruiken we en waarom?</h2>
          <p>Wij delen de cookies die we gebruiken op in drie categorieën:</p>

          <h3>A. Functionele cookies (noodzakelijk)</h3>
          <p>
            Deze cookies zijn technisch noodzakelijk om onze website goed te laten functioneren en gebruiksvriendelijker
            te maken. Ze zorgen er bijvoorbeeld voor dat jouw voorkeursinstellingen worden onthouden of dat formulieren
            correct werken. Voor het plaatsen van deze cookies is volgens de wet geen voorafgaande toestemming vereist.
          </p>

          <h3>B. Analytische cookies</h3>
          <p>
            Wij gebruiken analytische cookies om het gebruik van onze website te meten en te analyseren. Met deze
            statistieken verbeteren we continu de werking, vindbaarheid en de informatie op onze website.
          </p>
          <ul>
            <li>
              <strong>Google Analytics:</strong> Wij hebben Google Analytics privacyvriendelijk ingesteld conform de
              richtlijnen van de Autoriteit Persoonsgegevens. Dit betekent dat jouw IP-adres wordt gemaskeerd en dat
              Google deze gegevens niet met derden mag delen of mag gebruiken voor andere Google-diensten.
            </li>
          </ul>

          <h3>C. Tracking- en marketingcookies</h3>
          <p>
            Deze cookies houden jouw surfgedrag bij, zodat we op basis daarvan profielen kunnen opbouwen. Hiermee kunnen
            we onze advertenties op andere platforms (zoals Meta en Google) relevanter maken en afstemmen op jouw
            interesses. Voor het plaatsen van deze cookies vragen we vooraf altijd jouw uitdrukkelijke toestemming via
            onze cookiebanner.
          </p>

          <h2>3. Cookies van derde partijen (social media &amp; integraties)</h2>
          <p>
            Op onze website maken we gebruik van functies en integraties van externe partijen. Deze partijen kunnen eigen
            cookies plaatsen via onze website:
          </p>
          <ul>
            <li>
              <strong>Sociale media (Meta/Facebook, Instagram, LinkedIn):</strong> Op onze website zijn knoppen of pixels
              geplaatst om pagina&apos;s te kunnen promoten of het effect van advertenties te meten.
            </li>
            <li>
              <strong>Embedded video&apos;s (YouTube, Vimeo):</strong> Wanneer er video&apos;s op onze website worden
              afgespeeld, plaatsen deze platformen cookies om de videoprestaties te analyseren en gebruikersvoorkeuren
              bij te houden.
            </li>
            <li>
              <strong>Calendly (of vergelijkbare planningstools):</strong> Indien je via onze website rechtstreeks een
              afspraak of online kennismaking inplant, plaatst deze software cookies die noodzakelijk zijn om de
              boekingsfunctionaliteit aan te bieden.
            </li>
          </ul>
          <p>
            <strong>Opmerking:</strong> Brand &amp; Boost heeft geen invloed op de cookies die deze derde partijen
            zelfstandig plaatsen. We adviseren je de privacy- en cookieverklaringen van de desbetreffende partijen te
            raadplegen voor meer informatie.
          </p>

          <h2>4. Hoe kun je cookies weigeren of verwijderen?</h2>
          <p>
            Je kunt via de cookiebanner op onze website zelf kiezen welke trackingcookies je accepteert. Daarnaast kun je
            cookies handmatig verwijderen of het automatisch plaatsen van cookies blokkeren via de instellingen van je
            internetbrowser. Raadpleeg de helpfunctie of handleiding van jouw specifieke browser (Google Chrome, Safari,
            Mozilla Firefox of Microsoft Edge) voor instructies over het beheren van cookies.
          </p>
          <p>
            <strong>Let op:</strong> Als je cookies volledig weigert of verwijdert, kan het zijn dat bepaalde
            functionaliteiten van onze website niet meer optimaal werken.
          </p>

          <h2>5. Contact en wijzigingen</h2>
          <p>
            Dit cookiebeleid kan tussentijds worden aangepast om te blijven voldoen aan veranderende wet- en regelgeving
            of wijzigingen in onze diensten. De meest actuele versie is altijd terug te vinden op onze website.
          </p>
          <p>
            Voor aanvullende informatie over hoe wij met jouw persoonsgegevens omgaan, verwijzen we je graag naar onze{" "}
            <Link to="/privacyverklaring">privacyverklaring</Link>. Heb je specifieke vragen over dit document? Neem dan
            gerust contact met ons op:
          </p>
          <p>
            Brand &amp; Boost Marketing Bureau
            <br />
            Platostraat 31, 3076 BL Rotterdam
            <br />
            E-mail: <a href="mailto:info@brandandboost.nl">info@brandandboost.nl</a>
          </p>
        </LegalContent>
      </Section>
    </>
  );
}
