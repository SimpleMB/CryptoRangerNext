import About from "../components/About/About"
import Clients from "../components/Clients/Clients"
import Footer from "../components/Footer/Footer"
import HeadIndex from "../components/HeadIndex/Head"
import Hero from "../components/Hero/Hero"
import HowItWorks from "../components/HowItWorks/HowItWorks"
import Navigation from "../components/Navigation/Navigation"
import Pricing from "../components/Pricing/Pricing"
import SectionDivider from "../components/SectionDivider/SectionDivider"

const MainTemplate: React.FC = () => {
  return (
    <>
      <HeadIndex />
      <Navigation />
      <Hero />
      <SectionDivider side="right"/>
      <About />
      <SectionDivider side='left'/>
      <Clients />
      <SectionDivider side='right'/>
      <HowItWorks />
      <SectionDivider side='left'/>
      <Pricing />
      <Footer />
    </>
  );
}

export default MainTemplate;