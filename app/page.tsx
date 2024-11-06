import Hero from "./_components/Hero";
import Nav from "./_components/Nav";

export default function Home() {
  return (
    <div className="md:px-8 lg:px-12">
      <Nav />
      <Hero/>
    </div>
  );
}
