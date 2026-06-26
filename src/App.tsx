import { Route, Routes } from "react-router-dom";

import { Layout } from "@/components/Layout";
import AlgemeneVoorwaarden from "@/pages/AlgemeneVoorwaarden";
import Contact from "@/pages/Contact";
import Cookiebeleid from "@/pages/Cookiebeleid";
import Diensten from "@/pages/Diensten";
import Faq from "@/pages/Faq";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import OnsVerhaal from "@/pages/OnsVerhaal";
import Portfolio from "@/pages/Portfolio";
import Privacyverklaring from "@/pages/Privacyverklaring";
import Proces from "@/pages/Proces";
import ServiceDetail from "@/pages/ServiceDetail";

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
        <Route path="/algemene-voorwaarden" element={<AlgemeneVoorwaarden />} />
        <Route path="/privacyverklaring" element={<Privacyverklaring />} />
        <Route path="/cookiebeleid" element={<Cookiebeleid />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
