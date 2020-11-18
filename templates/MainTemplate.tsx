import About from "../components/About/About"
import HeadIndex from "../components/HeadIndex/Head"
import Hero from "../components/Hero/Hero"
import Navigation from "../components/Navigation/Navigation"

const MainTemplate: React.FC = () => {
  return (
    <>
      <HeadIndex />
      <Navigation />
      <Hero />
      <About />
    </>
  );
}

export default MainTemplate;