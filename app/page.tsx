import Main from "@/components/Main";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Main>
      <Navbar></Navbar>
      <Hero></Hero>
      <Experience></Experience>
      <Footer></Footer>
    </Main>
  );
}
