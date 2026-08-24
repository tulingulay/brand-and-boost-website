import { Link } from "react-router-dom";

import { LegalContent } from "@/components/LegalContent";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SEO } from "@/components/SEO";
import { site } from "@/data/site";

export default function Cookiebeleid() {
  return (
    <>
      <SEO
        title="Cookiebeleid · Brand & Boost"
        description="Het cookiebeleid van Brand & Boost: welke cookies wij gebruiken, waarom, en hoe je je voorkeuren beheert."
        path="/cookiebeleid"
      />

      <PageHero title="Cookiebeleid" />

      <Section>
        <LegalContent updated="23 augustus 2026">
          <p>
            Wanneer je de website van Brand &amp; Boost bezoekt, gebruiken wij cookies en vergelijkbare technieken. In
            dit cookiebeleid leggen we uit welke dat zijn, voor welke doeleinden we ze gebruiken en hoe je jouw
            voorkeuren beheert.
          </p>

          <h2>1. Wat zijn cookies?</h2>
          <p>
            Cookies zijn kleine tekstbestanden die door een website op jouw computer, tablet of smartphone worden
            geplaatst op het moment dat je de website bezoekt. In deze tekstbestanden wordt informatie opgeslagen die bij
            een later bezoek weer kan worden herkend door de website. Waar we in dit beleid spreken over
            &lsquo;cookies&rsquo;, bedoelen we ook vergelijkbare technieken, zoals opslag in je browser (localStorage).
          </p>

          <h2>2. Welke cookies gebruiken we en waarom?</h2>

          <h3>A. Functionele cookies en opslag (noodzakelijk)</h3>
          <p>
            Deze zijn technisch noodzakelijk om onze website goed te laten functioneren. Zo onthouden wij in je browser
            welke cookiekeuze je hebt gemaakt, zodat we daar niet bij elk bezoek opnieuw om hoeven te vragen. Voor deze
            categorie is volgens de wet geen voorafgaande toestemming vereist.
          </p>

          <h3>B. Analytische cookies (alleen met jouw toestemming)</h3>
          <p>
            Wij gebruiken Google Analytics om het gebruik van onze website te meten en te analyseren, bijvoorbeeld welke
            pagina&apos;s worden bezocht en hoe bezoekers de website vinden. Met die statistieken verbeteren we de
            werking, vindbaarheid en inhoud van de website. Deze cookies plaatsen wij uitsluitend nadat je daarvoor via
            onze cookiemelding toestemming hebt gegeven. Wij hebben Google Analytics privacyvriendelijk ingesteld: je
            IP-adres wordt gemaskeerd en wij delen de gegevens niet met derden voor advertentiedoeleinden.
          </p>

          <h3>C. Tracking- en marketingcookies</h3>
          <p>
            Op dit moment plaatst onze website <strong>geen</strong> tracking- of marketingcookies en geen cookies van
            advertentieplatforms of social media. Mocht dat in de toekomst veranderen, dan werken wij dit beleid bij en
            vragen wij daarvoor eerst opnieuw jouw uitdrukkelijke toestemming via de cookiemelding.
          </p>

          <h2>3. Hoe kun je cookies weigeren of verwijderen?</h2>
          <p>
            Via de cookiemelding op onze website kies je zelf of je analytische cookies accepteert; weigeren heeft geen
            invloed op de werking van de website. Daarnaast kun je cookies handmatig verwijderen of het plaatsen van
            cookies blokkeren via de instellingen van je internetbrowser. Raadpleeg de helpfunctie van jouw browser
            (Google Chrome, Safari, Mozilla Firefox of Microsoft Edge) voor instructies. Wil je je keuze herzien, wis
            dan de sitegegevens van brandandboost.nl in je browser; bij je volgende bezoek verschijnt de cookiemelding
            opnieuw.
          </p>

          <h2>4. Contact en wijzigingen</h2>
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
            {site.name} Marketing Bureau
            <br />
            {site.address.street}, {site.address.postalCode} {site.address.city}
            <br />
            E-mail: <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </LegalContent>
      </Section>
    </>
  );
}
