import { Flex, Grid } from '@chakra-ui/react'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import React, { useState } from 'react'
import { strings } from '../strings'
import { Footer } from '../components/Footer'
import ProjectCard from '../components/Cards'
import cards from '../projectinfo'
import { Hero } from '../components/Hero'
import { ToggleLanguage } from '../components/ToggleLanguage'

export const Projects = () => {
    const [language, setLanguage] = useState("EN");

    function getCard(project: string) {
        return (
            <ProjectCard 
                title={cards[project].title}
                summary={cards[project][language]}
                dependencies={cards[project].dependencies}
                url={cards[project].url}
            />
        )
    }

    return (
        <Container>
            <Hero title="Projects" />
            <Flex  position="fixed"top="1rem"
            left="1rem">
                <ToggleLanguage language={language} setLanguage={setLanguage}/>
            </Flex>
            <Main height="650px">
                <Grid templateColumns="repeat(3, 1fr)" gap={10}>
                    {getCard("media_server")}
                    {getCard("website")}
                    {getCard("amazon_bot")}
                    {getCard("devops")}
                    {getCard("linux_scripts")}
                    {getCard("aoc")}
                </Grid>
            </Main>
            <Footer>
                {strings[language].footer}
            </Footer>
        </Container>
    );
};
  
export default Projects