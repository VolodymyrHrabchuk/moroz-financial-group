import Pricing from "@/components/Pricing";
import React from "react";

export const metadata = {
  title: "Pricing",
};

const PricePage = () => {
  return (
    <main className='pt-40 py-24'>
      <Pricing />
    </main>
  );
};

export default PricePage;
