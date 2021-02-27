import { Flex, Heading } from "@chakra-ui/react";

export const Hero = ({ title }) => (
  <Flex justifyContent="center" alignItems="center" pt="2em">
    <Heading as="u" fontSize={{ base: "20px", md: "50px", lg: "80px" }}>
      {title}
    </Heading>
  </Flex>
);
