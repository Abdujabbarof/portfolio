import About from "@/components/About";
import ClientSays from "@/components/ClientSays";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Text from "@/components/Text";

export default function Home() {
  return (
    <>
      <Hero />
      <Text />
      <Projects />
      <Skills />
      <About />
      <Contacts />
      {/* <ClientSays /> */}
      <Footer />
    </>
  )
}
