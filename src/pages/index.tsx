import { Text, List, Flex, GridItem, SimpleGrid } from "@chakra-ui/react";
import {
  AtSignIcon,
  AttachmentIcon,
  CheckCircleIcon,
  EditIcon,
  EmailIcon,
} from "@chakra-ui/icons";
import { Hero } from "../components/Hero";
import { Main } from "../components/Main";
import React, { useState } from "react";
import { strings } from "../strings";
import { Footer } from "../components/Footer";
import { ToggleLanguage } from "../components/ToggleLanguage";
import MyListItem from "../components/MyListItem";
import { MyContainer } from "../components/MyContainer";
import { Image, Box } from "@chakra-ui/react";

const Index = () => {
  const [language, setLanguage] = useState("EN");
  return (
    <MyContainer>
      <Flex position="fixed" top="1rem" left="1rem">
        <ToggleLanguage language={language} setLanguage={setLanguage} />
      </Flex>
      <Main>
        <Hero title="adrián rivera balasquide" />
        <title>AR Balasquide</title>
        <Text>{strings[language].summary}</Text>
        <Box boxSize="sm">
          <Image
            src="https://pics.balasquide.xyz/cats/me-cat.png"
            alt="Adrian Rivera & Libertad Rivera"
          />
        </Box>
        <SimpleGrid columns={[1, null, 2]} gap={6}>
          <GridItem>
            <Text as="u">{strings[language].programming_lang}</Text>
            <List>
              <br />
              <MyListItem text="C/C++" icon={AtSignIcon} />
              <MyListItem
                text="Python"
                icon={AtSignIcon}
              />
              <MyListItem text="Bash" icon={AtSignIcon} />
              <MyListItem text="Octave, MATLAB" icon={AtSignIcon} />
              <MyListItem text="Nodejs, Typescript, Javascript" icon={AtSignIcon} />
              <MyListItem
                text="SQL/MySQL, Postgresql, MongoDB"
                icon={AtSignIcon}
              />
            </List>
          </GridItem>
          <GridItem>
            <Text as="u">{strings[language].other_experience}</Text>
            <List>
              <br />
              <MyListItem text="ROS" icon={AtSignIcon} />
              <MyListItem text="Linux" icon={AtSignIcon} />
              <MyListItem text="OpenCV" icon={AtSignIcon} />
              <MyListItem
                text="DDS"
                icon={AtSignIcon}
              />
              <MyListItem text="SBC (Arduino, RaspberryPi, Odroid, etc.)" icon={AtSignIcon} />
              <MyListItem text="Boost" icon={AtSignIcon} />
              <MyListItem text="Ardupilot & PX4" icon={AtSignIcon} />
              <MyListItem text="Nvidia Jetson, Orin, Xavier" icon={AtSignIcon} />
              <MyListItem text="MPU5s, Silver Radios, Doodle Radios" icon={AtSignIcon} />
              <MyListItem text="SDR" icon={AtSignIcon} />
            </List>
          </GridItem>
          <GridItem>
            <List spacing={3} my={0}>
              <MyListItem
                text={strings[language].resume}
                icon={AttachmentIcon}
                url="/resume.pdf"
              />
              <MyListItem
                text={strings[language].projects}
                icon={CheckCircleIcon}
                url="/projects"
              />
              <MyListItem
                text="Github"
                icon={CheckCircleIcon}
                url="https://github.com/arBalasquide"
              />
              <MyListItem
                text="ar@balasquide.xyz"
                icon={EmailIcon}
                url="mailto:ar@balasquide.xyz"
              />
            </List>
          </GridItem>
          <GridItem width="330px" height="230px"></GridItem>
        </SimpleGrid>
      </Main>
      <Footer>{strings[language].footer}</Footer>
    </MyContainer>
  );
};

export default Index;
