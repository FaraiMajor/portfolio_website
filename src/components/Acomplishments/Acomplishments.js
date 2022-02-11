import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
    { number: 7, text: 'Project Contributed' },
    { number: 3.9, text: 'GPA', },
    { number: 10, text: 'Projects', },
    { number: 5000, text: 'Github Stars', }
];

const Acomplishments = () => (
    <Section>
        <SectionTitle > Personal Achievements </SectionTitle>
        <Boxes> {
            data.map((card, index) => (
                <Box key={index} >
                    <BoxNum > {card.number} </BoxNum>
                    <BoxText > {card.text} </BoxText>
                </Box >
            ))
        }
        </Boxes>
        <br />
        <SectionText style={{ display: "flex", alignItems: "center", color: "white", marginBottom: "20px" }}>
            Tech Talent Pipeline Residency Program (TTP), New York, NY	<br />
            January 2022 – Present
        </SectionText>
        <SectionText>

            •	Selected to participate in NYC Tech Talent Pipeline Web Development Residency program which provides hands on training in full-stack web development<br />
            •	Participated in numerous projects implementing learnings in Node, Express, React and JavaScript during month long web-intensive training program<br />
            •	Developed skills in time management and financial literacy
        </SectionText>
    </Section >
);

export default Acomplishments;