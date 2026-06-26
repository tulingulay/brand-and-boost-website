/**
 * Veelgestelde vragen, gegroepeerd per categorie. `faqCategories` voedt de
 * FAQ-pagina; `faqs` is de platte lijst (homepage-teaser + FAQPage JSON-LD).
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  title: string;
  items: FaqItem[];
}

export const faqCategories: FaqCategory[] = [
  {
    title: "Social media beheer",
    items: [
      {
        question: "Wat kost het volledig uitbesteden van social media beheer per maand?",
        answer:
          "De kosten voor het uitbesteden van social media beheer variëren per maand op basis van de gewenste postfrequentie en de mate van beheer. Bij Brand & Boost werken wij met transparante, modulaire abonnementen vanaf € 250,- per maand (The Starter) tot € 950,- per maand (The Platinum). Hierdoor betaal je uitsluitend voor de exacte online frequentie en de add-ons die jouw bedrijf op dit moment nodig heeft om organisch te groeien.",
      },
      {
        question: "Wat is het verschil tussen organisch social media beheer en adverteren?",
        answer:
          "Organisch social media beheer richt zich op het bouwen van een loyale community en merkidentiteit door middel van regelmatige, gratis geplaatste content op je feed en stories. Adverteren (Meta of LinkedIn Ads) omvat betaalde campagnes waarbij je gericht budget inzet om direct een specifieke, nieuwe doelgroep te bereiken voor directe leads, boekingen of verkopen. Een sterke marketingstrategie combineert beide elementen.",
      },
      {
        question: "Wat zit er standaard wel en niet in een maandelijks social media abonnement?",
        answer:
          "Onze social media abonnementen zijn inclusief een strategische maandkalender, professionele copywriting, hashtag-onderzoek en de volledige technische inplanning (scheduling) op je kanalen. Contentcreatie op locatie (fotografie/videografie) en intensief dagelijks beheer van je DM-inbox vallen hier standaard buiten; deze zijn flexibel als losse add-ons aan je pakket toe te voegen.",
      },
      {
        question: "Hoeveel posts per week zijn nodig om te groeien op Instagram en Facebook?",
        answer:
          "Voor gezonde, consistente organische groei adviseren wij een minimale frequentie van 2 tot 3 hoogwaardige posts per week, gecombineerd met regelmatige updates in je Stories. Het algoritme van kanalen zoals Instagram en Facebook geeft voorrang aan accounts die voorspelbaar en consistent content publiceren. Kwaliteit en relevantie voor je doelgroep zijn hierbij belangrijker dan kwantiteit.",
      },
    ],
  },
  {
    title: "Website development",
    items: [
      {
        question: "Wat kost een professionele WordPress- of custom website gemiddeld?",
        answer:
          "De investering in een professionele website hangt volledig af van jouw specifieke wensen, de complexiteit en de gewenste functionaliteiten. Een conversiegerichte landingspagina of One-Page website start bij Brand & Boost vanaf € 850,-. Voor een complete Multi-Page website (MKB portfolio site van 4-6 pagina's) ligt de gemiddelde investering tussen de € 1.950,- en € 2.450,-. Heb je behoefte aan een uitgebreid custom platform, een geavanceerde webshop of specifieke software-koppelingen? Dan kunnen de kosten oplopen tot € 5.000,- of meer. Elk project is maatwerk; wij stemmen de opzet altijd exact af op jouw budget en bedrijfsdoelen.",
      },
      {
        question: "Wat is het verschil tussen eenmalige bouwkosten en maandelijkse websitekosten?",
        answer:
          "De eenmalige bouwkosten dekken het strategische UX/UI design, de technische realisatie, de inrichting van de pagina's en de livegang van de website. De maandelijkse kosten zijn noodzakelijk voor de doorlopende fundering: de hosting en het technisch onderhoud (beveiligingsupdates, malware-monitoring en cloud-backups) om de website snel, stabiel en veilig te houden.",
      },
      {
        question: "Hoeveel pagina's heeft een standaard MKB-website nodig?",
        answer:
          "Een effectieve en overzichtelijke MKB-website heeft in de basis 4 tot 6 pagina's nodig. Dit omvat doorgaans een sterke homepage (voor de eerste indruk), een 'Over ons' of teampagina (voor betrouwbaarheid), 1 tot 3 specifieke diensten- of portfoliopagina's, en een overzichtelijke contactpagina met een conversiegericht formulier.",
      },
      {
        question: "Hoe kan ik een online boekingssysteem (zoals Salonized) integreren in mijn website?",
        answer:
          "Bij Brand & Boost bieden wij twee oplossingen voor online boekingen. Wij kunnen jouw bestaande externe software (zoals Salonized, PlanGo of Bookly) naadloos koppelen via een veilige API-koppeling of widget, waarbij wij de styling volledig matchen met jouw huisstijl. Wil je liever besparen op vaste abonnementskosten? Dan bouwen wij een custom boekingssysteem volledig zelf binnen jouw eigen website. Hierdoor behoud je alle functionaliteit voor afspraken en planningen, zónder dat je vastzit aan maandelijkse softwarekosten.",
      },
    ],
  },
  {
    title: "Video content creatie",
    items: [
      {
        question: "Wat kost het laten maken en monteren van short-form video's (Reels/TikToks)?",
        answer:
          "De montage van een losse short-form video uit aangeleverd ruw materiaal kost € 100,- per stuk. Omdat videocontent continuïteit vereist, werken wij met een voordelige short-form video-bundel van 5 stuks voor € 195,- eenmalig. Indien er ook een fysieke videograaf op locatie gewenst is om de beelden professioneel te schieten, geldt hiervoor een uurtarief van € 95,-.",
      },
      {
        question: "Wat is een UGC (User Generated Content) video en wat levert het op?",
        answer:
          "Een UGC (User Generated Content) video is een advertentie of organische video die is gemaakt in een persoonlijke en authentieke stijl, vaak alsof een echte consument of expert het product aanbeveelt. Brand & Boost werkt hiervoor nauw samen met onze vaste, professionele UGC-contentcreator. Dit model levert een aanzienlijk hogere betrokkenheid en meer conversies op dan traditionele, gelikte reclamevideo's, omdat consumenten sneller overtuigd raken door menselijke, herkenbare en betrouwbare content.",
      },
      {
        question: "Hoe bereid ik een content shoot op locatie voor mijn bedrijf voor?",
        answer:
          "Een succesvolle content shoot op locatie vereist een helder script of een zogeheten 'shotlist'. Vooraf stemmen wij af welke diensten, teamleden of behandelingen wij in beeld gaan brengen. Zorg dat de locatie representatief is en dat alle benodigde inloggegevens of merkelementen klaarliggen, zodat de fotograaf/videograaf de uren op locatie optimaal kan benutten voor een brede beeldbank.",
      },
    ],
  },
  {
    title: "Branding",
    items: [
      {
        question: "Wat is het verschil tussen alleen een logo laten ontwerpen en een complete branding?",
        answer:
          "Een logo is uitsluitend het visuele herkenningsteken (het beeldmerk) van je bedrijf. Een complete branding omvat de totale merkidentiteit en visuele taal. Dit betekent dat wij naast de hoofd- en sublogo's ook een uniek kleurenpalet, typografie (lettertypes), grafische elementen, beeldrichtlijnen en een digitaal Brandbook (stijlgids) ontwikkelen. Dit zorgt voor een consistente en professionele uitstraling op álle uitingen.",
      },
      {
        question: "Wat kost een professioneel brandingtraject voor een startend of groeiend bedrijf?",
        answer:
          "Een Logo Design Essentials pakket (alleen het logo in alle bestandstypen inclusief favicon) kost € 395,- eenmalig. Een volledig Branding- & Huisstijltraject inclusief een uitgebreid Brandbook, merkidentiteit en stijlgids kost bij Brand & Boost € 850,- eenmalig. Kies je ervoor om een complete Multi-Page website door ons te laten bouwen? Dan is dit volledige Branding- & Huisstijltraject ter waarde van € 850,- helemaal inbegrepen, zodat jouw merkidentiteit en website direct perfect op elkaar aansluiten.",
      },
      {
        question: "Wat moet er verplicht in een Brandbook of stijlgids staan?",
        answer:
          "Een professioneel Brandbook bevat de regels voor het gebruik van de huisstijl. Dit omvat de exacte kleurcodes (HEX, RGB en CMYK voor drukwerk), de primaire en secundaire lettertypes (typografie), de varianten van het logo (hoofdlogo, sublogo, iconen), de gewenste fotografiestijl (beeldtaal) en voorbeelden van hoe de huisstijl toegepast moet worden op social media of drukwerk.",
      },
    ],
  },
  {
    title: "SEO / content",
    items: [
      {
        question: "Wat is het verschil tussen SEO (zoekmachineoptimalisatie) en SEA (adverteren)?",
        answer:
          "SEO (Search Engine Optimization) richt zich op het gratis en organisch vindbaar worden in zoekmachines door je website technisch en inhoudelijk te optimaliseren. Dit heeft een langdurig effect. SEA (Search Engine Advertising) is het direct inkopen van advertentieruimte in zoekmachines via systemen zoals Google Ads. Bij SEA betaal je op basis van het gekozen biedstrategiemodel (bijvoorbeeld per klik, per duizend weergaven of per conversie) en stopt de directe vindbaarheid zodra het lopende campagnebudget is opgebruikt.",
      },
      {
        question: "Hoe lang duurt het voordat een website hoog scoort in Google via SEO?",
        answer:
          "SEO is een duurzame langetermijnstrategie. Gemiddeld duurt het 3 tot 6 maanden voordat de technische optimalisaties, zoekwoordenstrategieën en nieuw geschreven content resulteren in meetbaar hogere posities en organisch verkeer in zoekmachines zoals Google. Dit is afhankelijk van de concurrentie in jouw specifieke branche en regio.",
      },
      {
        question: "Wat kost het laten schrijven van SEO-geoptimaliseerde webteksten per pagina?",
        answer:
          "Het professioneel laten schrijven van SEO-geoptimaliseerde webteksten kost bij Brand & Boost € 115,- per pagina. Deze teksten worden volledig afgestemd op de juiste zoektermen (keywords), bevatten een sterke conversiegerichte opbouw (H1, H2, H3 structuur) en worden geschreven in de exacte tone of voice van jouw merk, met een omvang van circa 300 tot 500 woorden per pagina.",
      },
    ],
  },
  {
    title: "SEA / Meta / LinkedIn advertenties",
    items: [
      {
        question: "Wat is het minimale advertentiebudget om te starten met Meta Ads (Instagram/Facebook)?",
        answer:
          "Om het algoritme van Meta (Instagram en Facebook) voldoende data te geven om te kunnen optimaliseren, adviseren wij een minimaal advertentiebudget van € 5,- tot € 10,- per dag per lopende campagne. Dit budget betaal je rechtstreeks aan het advertentieplatform en staat los van de bureaukosten van Brand & Boost. Wij voeren vooraf altijd een onderzoek uit en geven je een gerichte indicatie van het aanbevolen budget om jouw doelen te behalen, maar je maakt als klant uiteindelijk altijd zelf de keuze welk budget het beste bij je past.",
      },
      {
        question: "Wanneer zet je Google Ads in en wanneer kies je voor Meta of LinkedIn Ads?",
        answer:
          "Google Ads zet je in wanneer potentiële klanten actief op zoek zijn naar jouw specifieke dienst of product (behoefte-gestuurd). Meta Ads (Instagram/Facebook) is ideaal om visueel interesse te wekken bij een geselecteerde doelgroep op basis van demografie en interesses (aanbod-gestuurd). LinkedIn Ads is de absolute standaard voor B2B-marketing, omdat je hier specifiek kunt targeten op functietitels, bedrijfsgrootte en branches.",
      },
      {
        question: "Wat is een reële ROAS (Return on Ad Spend) voor een online advertentiecampagne?",
        answer:
          "Een reële ROAS (Return on Ad Spend) is sterk afhankelijk van je branche, productprijs en het type campagne (leadgeneratie versus webshopverkopen). Gemiddeld wordt in de markt een ROAS van 3:1 tot 4:1 (iedere ingelegde euro levert 3 tot 4 euro aan omzet op) beschouwd als een gezonde, renderende basiscampagne.",
      },
    ],
  },
  {
    title: "Drukwerk",
    items: [
      {
        question: "Wat kost het grafisch laten ontwerpen van huisstijldrukwerk (visitekaartjes/flyers)?",
        answer:
          "Het grafisch ontwerpen van een los huisstijl-item (zoals een uniek visitekaartje, briefpapier, een cadeaubon of een flyer) kost € 149,- per item. Een uitgebreide brochure of productfolder tot 4 pagina's ontwerpen wij vanaf € 295,- eenmalig. Deze tarieven zijn puur voor het digitale design; het feitelijke drukwerk wordt apart berekend of rechtstreeks door de klant voldaan.",
      },
      {
        question: "Aan welke technische specificaties moet een drukklaar PDF-bestand voldoen?",
        answer:
          "Een professioneel, drukklaar PDF-bestand moet worden opgeleverd in de kleurinstelling CMYK (in plaats van het digitale RGB), een minimale resolutie hebben van 300 DPI voor haarscherpe afdrukken, en voorzien zijn van een afloopgebied (bleed) van 3 mm rondom inclusief snijtekens. Brand & Boost levert alle grafische designs standaard op volgens deze exacte technische drukkersspecificaties. Daarnaast kunnen wij het volledige drukproces uit handen nemen: wij bestellen het drukwerk voor je bij onze vaste leveranciers en zorgen ervoor dat het kant-en-klaar bij jouw bedrijf wordt bezorgd.",
      },
    ],
  },
  {
    title: "Onboarding & opstartfase",
    items: [
      {
        question: "Wat houden de eenmalige opstartkosten voor social media beheer precies in?",
        answer:
          "De eenmalige opstartkosten (onboarding-fee) dekken de volledige strategische en technische voorbereiding. Ons team richt de Meta Business Suite en het Accountcentrum correct in, koppelt je Instagram- en Facebook-pagina's, richt de gedeelde content-mappen in, voert een uitgebreide doelgroep- en hashtag-analyse uit, en stelt de allereerste contentkalender voor maand 1 op. Zo starten wij direct vanuit een ijzersterke fundering.",
      },
      {
        question: "Hoeveel tijd kost de onboarding bij een marketingbureau gemiddeld voordat de eerste content live gaat?",
        answer:
          "De opstart- en onboardingfase duurt gemiddeld 2 tot 3 weken. In deze periode lossen wij eventuele technische accountproblemen achter de schermen op, voeren wij de analyses uit en bereiden wij de eerste contentkalender voor. Zodra jij akkoord hebt gegeven op de eerste planning, gaan de posts en stories officieel live volgens de afgesproken frequentie.",
      },
      {
        question: "Welke inloggegevens en materialen moet ik aanleveren bij de start van een marketingtraject?",
        answer:
          "Voor een soepele start ontvangen wij graag toegang tot je website (WordPress/Shopify), je hostingomgeving en beheerdersrechten binnen de Meta Business Suite en Google-accounts. Daarnaast ontvangen wij graag bestaand beeldmateriaal, logo's (als vectorbestanden) en eventuele stijlgidsen of tone of voice documenten die reeds binnen je organisatie aanwezig zijn.",
      },
      {
        question: "Hoe verloopt de feedbackronde en goedkeuring van de contentkalender?",
        answer:
          "Efficiëntie en structuur zijn hierin leidend. Brand & Boost zet de contentkalender ruim van tevoren voor je klaar in een overzichtelijke, gedeelde map. Je krijgt hierna 7 kalenderdagen de tijd om feedback te geven of tekstuele wijzigingen door te geven. Bij het uitblijven van een reactie binnen deze termijn wordt de kalender conform onze voorwaarden als goedgekeurd beschouwd en automatisch ingepland, zodat je online ritme nooit stilvalt.",
      },
    ],
  },
  {
    title: "Over Brand & Boost",
    items: [
      {
        question: "Hoe flexibel zijn de abonnementen van Brand & Boost; kan ik maandelijks opzeggen?",
        answer:
          "Wij geloven in flexibiliteit en resultaat, maar wel met een stevig fundament. Onze social media abonnementen kennen een minimale contractduur van 12 maanden (een jaarcontract) om de strategie en het algoritme optimaal te laten renderen. Wel starten wij met een pilot van 3 maanden, zodat wij de samenwerking en de eerste resultaten laagdrempelig kunnen testen. Na de totale contractperiode van een jaar wordt de overeenkomst omgezet in een contract voor onbepaalde tijd, welke vervolgens maandelijks schriftelijk opzegbaar is met een opzegtermijn van één volledige kalendermaand.",
      },
      {
        question: "Geeft Brand & Boost keiharde garanties op omzet of ROI (Return on Investment)?",
        answer:
          "Nee, Brand & Boost geeft geen valse garanties op specifieke omzetcijfers, algoritme-prestaties of exacte winsten, omdat deze mede afhankelijk zijn van externe factoren zoals marktwerking en concurrentie. Wij verplichten ons contractueel tot een maximale, hoogwaardige inspanningsverplichting. Wij garanderen dat wij de marketing, techniek en contentcreatie uitvoeren volgens de hoogste professionele standaarden om jouw groeikansen te maximaliseren.",
      },
      {
        question: "Werkt Brand & Boost met vaste pakketten of met maatwerk offertes?",
        answer:
          "Brand & Boost combineert het beste van beide werelden met ons unieke 'Service Menu'. Je kiest bij ons een solide, betaalbare basis (bijvoorbeeld The Standard social media frequentie of een Multi-Page website) en breidt dit naar eigen wens flexibel uit met losse add-ons (zoals een extra video-bundel, nieuwsbriefopzet of extra uren fotografie). Je betaalt dus uitsluitend voor wat je daadwerkelijk nodig hebt.",
      },
      {
        question: "Hoe gaat Brand & Boost om met de privacy en inloggegevens van mijn bedrijf?",
        answer:
          "Wij gaan uiterst vertrouwelijk en AVG-proof om met al jouw bedrijfs- en inloggegevens. Toegang tot jouw systemen wordt veilig opgeslagen en is uitsluitend toegankelijk voor geautoriseerde teamleden via accounts die zijn beveiligd met tweestapsverificatie (2FA). Direct na beëindiging van onze samenwerking worden alle inloggegevens volledig uit onze systemen verwijderd conform onze privacyverklaring.",
      },
    ],
  },
];

/** Platte lijst van alle vragen (homepage-teaser + FAQPage JSON-LD). */
export const faqs: FaqItem[] = faqCategories.flatMap((category) => category.items);
