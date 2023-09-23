import Main from "@/components/Main";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Main>
      <Navbar></Navbar>
      <div className="lg:grid lg:grid-cols-2">
        <Hero></Hero>
        <div className="lg:pt-14">
          <Experience></Experience>
          <Footer></Footer>
        </div>
      </div>
    </Main>
  );
}
