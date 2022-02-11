import React from 'react';

import { Section, SectionText, SectionTitle2 } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle2 main center>
        Hi<br />
        I'm Farai, <br />
        Web Developer

      </SectionTitle2>
      <SectionText>
        "Sometimes it's better to leave something alone, to pause, and that's very true of programming." - Joyce Wheeler
      </SectionText>
      <Button onClick={() => window.location = 'https://www.linkedin.com/in/faraimutukumira/'} >Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;