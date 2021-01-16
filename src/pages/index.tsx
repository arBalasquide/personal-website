import {
  Link as ChakraLink,
  Text,
  List,
  ListIcon,
  ListItem,
  Flex,
  GridItem,
  Grid,
} from '@chakra-ui/react'
import { AtSignIcon, AttachmentIcon, CheckCircleIcon, EditIcon, EmailIcon } from '@chakra-ui/icons'
import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import React, { useState } from 'react'
import { strings } from '../strings'
import { Footer } from '../components/Footer'
import { ToggleLanguage } from '../components/ToggleLanguage'

// Can't change some things here into components, but 2 lazy

const Index = () => {
  const [language, setLanguage] = useState("EN"); 

  return (
    <Container>
      <Flex  position="fixed"top="1rem"
        left="1rem">
          <ToggleLanguage language={language} setLanguage={setLanguage} />
        </Flex>
      <Hero title="adrián rivera balasquide"/>
      <Main>
        <Text>
            {strings[language].summary}
          </Text>
        <Grid  templateColumns="repeat(2, 1fr)" gap={10}>
          <GridItem>
            <Text as="u">{strings[language].programming_lang}</Text>
            <List>
              <br />
              <ListItem>
                <ListIcon as={AtSignIcon} color="green.500"/>
                Python
              </ListItem>
              <ListItem>
                <ListIcon as={AtSignIcon} color="green.500"/>
                Node.js, Javacript, Typescript
              </ListItem>
              <ListItem>
                <ListIcon as={AtSignIcon} color="green.500"/>
                Java
              </ListItem>
              <ListItem>
                <ListIcon as={AtSignIcon} color="green.500"/>
                C/C++
              </ListItem>
              <ListItem>
                <ListIcon as={AtSignIcon} color="green.500"/>
                Bash
              </ListItem>
              <ListItem>
                <ListIcon as={AtSignIcon} color="green.500"/>
                SQL, Postgresql, MongoDB
              </ListItem>
            </List>
          </GridItem>
          <GridItem>
            <Text as="u">{strings[language].other_experience}</Text>
            <List>
              <br />
              <ListItem>
                <ListIcon as={AtSignIcon} color="green.500"/>
                ROS
              </ListItem>
              <ListItem>
                <ListIcon as={AtSignIcon} color="green.500"/>
                Linux & Windows
              </ListItem>
              <ListItem>
                <ListIcon as={AtSignIcon} color="green.500"/>
                OpenCV & YOLO
              </ListItem>
              <ListItem>
                <ListIcon as={AtSignIcon} color="green.500"/>
                Graphql, Apollo, React, Next.js
              </ListItem>
              <ListItem>
                <ListIcon as={AtSignIcon} color="green.500"/>
                Arduino & Raspberrypi
              </ListItem>
              <ListItem>
                <ListIcon as={AtSignIcon} color="green.500"/>
                NGINX & Apache
              </ListItem>
            </List>
          </GridItem>
          <GridItem>
            <List spacing={3} my={0}>
              <ListItem>
                <ListIcon as={AttachmentIcon} color="green.500" />
                <ChakraLink
                  href="https://balasquide.xyz/resume.pdf"
                  flexGrow={1}
                  mr={2}
                >
                  {strings[language].resume}
                </ChakraLink>
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                <ChakraLink href="/projects" flexGrow={1} mr={2}>
                  {strings[language].projects}
                </ChakraLink>
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                <ChakraLink isExternal href="https://github.com/arBalasquide" flexGrow={1} mr={2}>
                  Github
                </ChakraLink>
              </ListItem>
              <ListItem>
                <ListIcon as={EmailIcon} color="green.500" />
                <ChakraLink isExternal href="mailto:ar@balasquide.xyz" flexGrow={1} mr={2}>
                  ar@balasquide.xyz
                </ChakraLink>
              </ListItem>
              <ListItem>
                <ListIcon as={EditIcon} color="green.500" />
                <ChakraLink isExternal href="https://memoir.balasquide.xyz/" flexGrow={1} mr={2}>
                  {strings[language].memoir}
                </ChakraLink>
              </ListItem>
              <ListItem>
                <ListIcon as={EditIcon} color="green.500" />
                <ChakraLink isExternal href="https://ja.balasquide.xyz/" flexGrow={1} mr={2}>
                  {strings[language].ja_resources}
                </ChakraLink>
              </ListItem>
            </List>
          </GridItem>
          <GridItem width="330px" height="230px">
          </GridItem>
        </Grid>
      </Main>
      <Footer>
          {strings[language].footer}
        </Footer>
    </Container>
  );
};

export default Index