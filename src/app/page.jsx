import ContactForm from "@/components/ContactForm";
import CountSection from "@/components/CountSection";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import TextSection from "@/components/TextSection";
import Link from "next/link";

export default function Home() {
  return (
    <main className=''>
      <Hero />
      <TextSection />
      <CountSection />
      <ServicesSection />
      <>
        <ContactForm />
        <p className='text-2xl md:text-5xl font-bold -translate-y-5 pb-12 text-center '>
          Schedule a call with us{" "}
          <Link
            href='https://outlook.office365.com/owa/calendar/DmitryMoroz1@tmaccountant.us/bookings/'
            className='text-blue underline underline-offset-4 hover:text-grey transition-colors'
          >
            here
          </Link>
        </p>
      </>
    </main>
  );
}
