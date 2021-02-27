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

const Index = () => {
  const [language, setLanguage] = useState("EN");
  return (
    <MyContainer>
      <Flex position="fixed" top="1rem" left="1rem">
        <ToggleLanguage language={language} setLanguage={setLanguage} />
      </Flex>
      <Main>
        <Hero title="adrián rivera balasquide" />
        <Text>{strings[language].summary}</Text>
        <SimpleGrid columns={[1, null, 2]} gap={10}>
          <GridItem>
            <Text as="u">{strings[language].programming_lang}</Text>
            <List>
              <br />
              <MyListItem text="Python" icon={AtSignIcon} />
              <MyListItem
                text="Node.js, Javacript, Typescript"
                icon={AtSignIcon}
              />
              <MyListItem text="Java" icon={AtSignIcon} />
              <MyListItem text="C/C++" icon={AtSignIcon} />
              <MyListItem text="Bash" icon={AtSignIcon} />
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
              <MyListItem text="Linux & Windows" icon={AtSignIcon} />
              <MyListItem text="OpenCV & YOLO" icon={AtSignIcon} />
              <MyListItem
                text="Graphql, Apollo, React, Next.js"
                icon={AtSignIcon}
              />
              <MyListItem text="Arduino & Raspberrypi" icon={AtSignIcon} />
              <MyListItem text="NGINX & Apache" icon={AtSignIcon} />
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
              <MyListItem
                text={strings[language].memoir}
                icon={EditIcon}
                url="https://memoir.balasquide.xyz"
              />
              <MyListItem
                text={strings[language].ja_resources}
                icon={EditIcon}
                url="https://ja.balasquide.xyz"
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
