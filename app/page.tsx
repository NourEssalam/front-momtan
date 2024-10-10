import AboutNutshell from "@/components/home/AboutNutshell";
import EventUpcoming from "@/components/home/EventUpcoming";
import Hero from "@/components/home/Hero";
import Partner from "@/components/home/Partner";
import SignUp from "@/components/home/SignUp";

export default function Home() {
  return (
    <main>
      <Hero />
      <Partner />
      <AboutNutshell />
      {/* <EventUpcoming /> */}
      <SignUp />
    </main>
  );
}
