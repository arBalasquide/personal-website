import { Flex, Grid, SimpleGrid } from "@chakra-ui/react";
import { Main } from "../components/Main";
import React, { useState } from "react";
import { strings } from "../strings";
import { Footer } from "../components/Footer";
import ProjectCard from "../components/Cards";
import cards from "../projectinfo";
import { Hero } from "../components/Hero";
import { ToggleLanguage } from "../components/ToggleLanguage";
import HomeButton from "../components/HomeButton";
import { MyContainer } from "../components/MyContainer";

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
    );
  }

  return (
    <MyContainer>
      <Flex position="fixed" top="1rem" left="1rem">
        <ToggleLanguage language={language} setLanguage={setLanguage} />
        <HomeButton />
      </Flex>
      <Main>
        <Hero title="Projects" />
        <SimpleGrid columns={[1, 2, 3]} gap={5}>
          {getCard("soyrecipes")}
          {getCard("quickwits")}
          {getCard("media_server")}
          {getCard("website")}
          {getCard("amazon_bot")}
          {getCard("devops")}
          {getCard("linux_scripts")}
          {getCard("aoc")}
        </SimpleGrid>
      </Main>
      <Footer>{strings[language].footer}</Footer>
    </MyContainer>
  );
};

export default Projects;
