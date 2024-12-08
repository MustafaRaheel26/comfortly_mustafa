import Image from "next/image";
import NavBar from "./components/navbar/navbar";
import HeroSection from "./components/heroSection/heroSection";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
       <div>
          <NavBar/>
          <HeroSection/>
          <Footer/>
       </div>
  );
}
