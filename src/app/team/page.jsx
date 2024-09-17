import AccountantsList from "@/components/AccountantsList";
import TeamHero from "@/components/TeamHero";
import TeamValues from "@/components/TeamValues";
import TeamWhoWeAre from "@/components/TeamWhoWeAre";
import React from "react";

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
