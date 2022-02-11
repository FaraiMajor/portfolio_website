import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section2 } from '../styles/GlobalComponents';
import Backgroundimg from '../components/Backgroundimg/Backgroundimg';
import Contact from '../components/Contact/Contact';

const Home = () => {
  return (
    <Layout>
      <Section2 grid>
        <Hero />
        <Backgroundimg />
        {/* <BgAnimation /> */}
      </Section2>
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
      <Contact />
    </Layout>
  );
};

export default Home;
