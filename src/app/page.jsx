import ContactForm from "@/components/ContactForm";
import CountSection from "@/components/CountSection";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import TextSection from "@/components/TextSection";

export default function Home() {
  return (
    <main className=''>
      <Hero />
      <TextSection />
      <CountSection />
      <ServicesSection />
      <ContactForm />
    </main>
  );
}
