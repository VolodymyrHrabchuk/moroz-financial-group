import AccountantsList from "@/components/AccountantsList";
import TeamHero from "@/components/TeamHero";
import TeamValues from "@/components/TeamValues";
import TeamWhoWeAre from "@/components/TeamWhoWeAre";
import React from "react";

export const metadata = {
  title: "Our Team",
  description: "Learn more about Moroz Financial Group and our services.",
};
const TeamPage = () => {
  return (
    <main>
      <TeamHero />
      <TeamWhoWeAre />
      <AccountantsList />
      <TeamValues />
    </main>
  );
};

export default TeamPage;
