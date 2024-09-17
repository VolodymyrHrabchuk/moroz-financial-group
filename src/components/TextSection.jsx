import AnimatedText from "@/app/utils/AnimatedText";

const phrases = [
  "We offer comprehensive accounting services",
  "including financial planning, tax consulting,",
  "financial statement and tax preparation, payroll",
  "bookkeeping and many others.",
];

const TextSection = () => {
  return (
    <section className='w-full py-24'>
      <div className='flex flex-col items-center max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Animated Heading */}
        <AnimatedText
          index={0}
          className='text-3xl sm:text-4xl md:text-5xl text-center leading-snug text-blue mb-6 font-bold'
        >
          Areas Of Expertise
        </AnimatedText>

        {/* Animated Phrases */}
        {phrases.map((phrase, index) => (
          <AnimatedText
            key={index}
            index={index + 1} // Increment index for delay
            className='text-lg sm:text-xl md:text-2xl text-blue text-center mt-2'
          >
            {phrase}
          </AnimatedText>
        ))}
      </div>
    </section>
  );
};

export default TextSection;
