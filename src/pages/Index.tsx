import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CatalogSection from "@/components/CatalogSection";
import PromoSection from "@/components/PromoSection";
import DeliverySection from "@/components/DeliverySection";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen bg-background grain overflow-x-hidden" style={{ backgroundColor: "hsl(24 18% 7%)", backgroundImage: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(212,121,58,0.09) 0%, transparent 60%)" }}>
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <section id="home"><HeroSection setActiveSection={setActiveSection} /></section>
        <section id="catalog"><CatalogSection /></section>
        <section id="promo"><PromoSection /></section>
        <section id="delivery"><DeliverySection /></section>
        <section id="contacts"><ContactsSection /></section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;