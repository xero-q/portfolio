import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <div className="mx-auto flex flex-col justify-center w-full">
      <Hero />
      <AboutMe />
    </div>
  );
}
