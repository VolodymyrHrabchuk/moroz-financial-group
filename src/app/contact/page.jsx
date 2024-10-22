import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import React from "react";

const ContactPage = () => {
  return (
    <main className='pt-40  max-w-[1200px] mx-auto'>
      <div className='text-2xl my-6 text-grey font-bold text-center'>
        To schedule an introduction consultation, please schedule a time by
        following{" "}
        <Link
          href='https://outlook.office365.com/book/DmitryMoroz1@tmaccountant.us/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue hover:text-grey hover:underline transition-color '
        >
          this link
        </Link>
        .
      </div>
      <ContactForm />
    </main>
  );
};

export default ContactPage;
