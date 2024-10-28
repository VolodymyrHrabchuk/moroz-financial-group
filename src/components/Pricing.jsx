import React from "react";

const priceSections = [
  {
    title: "Business Income Tax",
    subtitle: "Pricing is based on gross income per year",
    items: [
      { range: "From $0 to $125,000", price: "$ 600" },
      { range: "From $125,000 to $250,000", price: "$ 750" },
      { range: "From $250,000 to $350,000", price: "$ 1,000" },
      { range: "From $350,000 to $500,000", price: "$ 1,500" },
      { range: "From $500,000 to $1 Million", price: "$ 1,750" },
      { range: "From $1 Million to $2 Millions", price: "$ 2,000" },
      { range: "From $2 Millions to $4 Millions", price: "$ 2,500" },
      { range: "From $5 Millions", price: "+ $ 350 / Million" },
    ],
    itemKeyName: "range",
  },
  {
    title: "Personal Income Tax",
    subtitle:
      "All prices start from listed below, varying by service and complexity",
    items: [
      { item: "Base Price", price: "$ 300" },
      { item: "Schedule A", price: "$ 100 - 200" },
      { item: "Schedule B", price: "$ 50 - 150" },
      { item: "Schedule C", price: "$ 200" },
      { item: "Schedule D", price: "$ 50 - 300" },
      { item: "Schedule E Rentals", price: "$ 150 / each" },
      { item: "Schedule K - 1", price: "$25 - 50 / each" },
      { item: "Additional Forms", price: "$ 50 - 100 / each" },
      { item: "Additional State", price: "$ 50 / each" },
    ],
    itemKeyName: "item",
  },
  {
    title: "Bookkeeping services",
    subtitle: "Pricing is based on gross income per year",
    items: [
      { item: "Monthly", price: "$ " },
      { item: "Quarterly", price: "$ " },
      { item: "Annually", price: "$ " },
    ],
    itemKeyName: "item",
  },
  {
    title: "Legal Services",
    items: [
      { service: "Business Registration", price: "$ 600" },
      { service: "Annual Report Filing", price: "$ 150" },
      { service: "Change of Address", price: "$ 50" },
      { service: "General Consultation", price: "$ 250" },
      { service: "2553 S-Election", price: "$ 150" },
    ],
    itemKeyName: "service",
  },
  {
    title: "Payroll Services",
    items: [
      { employees: "1 Employee", price: "$ 300 / Quarter" },
      { employees: "1-5 Employees", price: "$ 450 / Quarter" },
      { employees: "5-10 Employees", price: "$ 750 / Quarter" },
    ],
    itemKeyName: "employees",
  },
  {
    title: "Tax Planning",
    items: [{ service: "Tax Strategy Consultation", price: "$ 500" }],
    itemKeyName: "service",
  },
  {
    title: "Tax Resolutions",
    items: [
      { service: "Audit Representation", price: "Starting at $ 3,000" },
      { service: "Penalty Abatement", price: "% 20 from Penalty Amount" },
    ],
    itemKeyName: "service",
  },
];

const PriceSection = ({ title, subtitle, items, itemKeyName }) => (
  <section className='mb-12'>
    <h2 className='text-3xl font-normal text-center mb-2 relative'>
      <span className='px-4 bg-white relative z-10 text-xl lg:text-4xl'>
        {title}
      </span>
      <div className='absolute w-full h-px bg-gray-300 top-1/2 left-0 -z-10'></div>
    </h2>
    {subtitle && (
      <p className='text-sm lg:text-md font-normal text-center mb-6'>
        {subtitle}
      </p>
    )}
    <div className='space-y-2'>
      {items.map((item, index) => (
        <div key={index} className='flex pt-2 justify-between'>
          <span className='text-sm lg:text-xl '>{item[itemKeyName]}</span>
          <span className='text-sm lg:text-xl'>{item.price}</span>
        </div>
      ))}
    </div>
  </section>
);

const PriceSectons = () => {
  return (
    <div className='max-w-2xl mx-auto pt-8 px-4 lg:px-8'>
      {priceSections.map((section, index) => (
        <PriceSection key={index} {...section} />
      ))}
    </div>
  );
};
export default PriceSectons;
