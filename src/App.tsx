import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "@/components/Layout";
import Contact from "@/pages/Contact";
import Diensten from "@/pages/Diensten";
import Faq from "@/pages/Faq";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import OnsVerhaal from "@/pages/OnsVerhaal";
import Portfolio from "@/pages/Portfolio";
import Proces from "@/pages/Proces";
import ServiceDetail from "@/pages/ServiceDetail";

// Laag-verkeer-pagina's met veel tekst als eigen chunk: de juridische
// teksten en de bedankpagina reizen dan niet mee in de hoofdbundel. De
// prerender rendert ze alsnog volledig uit (onAllReady in entry-server).
const AlgemeneVoorwaarden = lazy(() => import("@/pages/AlgemeneVoorwaarden"));
const Bedankt = lazy(() => import("@/pages/Bedankt"));
const Cookiebeleid = lazy(() => import("@/pages/Cookiebeleid"));
const Privacyverklaring = lazy(() => import("@/pages/Privacyverklaring"));

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/diensten" element={<Diensten />} />
        <Route path="/diensten/:slug" element={<ServiceDetail />} />
        <Route path="/ons-verhaal" element={<OnsVerhaal />} />
        <Route path="/proces" element={<Proces />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bedankt" element={<Bedankt />} />
        <Route path="/algemene-voorwaarden" element={<AlgemeneVoorwaarden />} />
        <Route path="/privacyverklaring" element={<Privacyverklaring />} />
        <Route path="/cookiebeleid" element={<Cookiebeleid />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
