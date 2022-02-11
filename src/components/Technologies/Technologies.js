import React from 'react';
import { DiFirebase, DiReact, DiZend, DiJava } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Ive worked with a range of technologies in the software engineering world.
      From web development front end and back end To Java
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="4rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experienced with <br />
            React.js, CSS, HTML
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="4rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experienced with <br />
            Node.js, sequelize, Express.js, PostgresSQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJava size="4rem" />
        <ListContainer>
          <ListTitle>Other Langauges</ListTitle>
          <ListParagraph>
            Experienced with <br />
            Java, Python and C#
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
