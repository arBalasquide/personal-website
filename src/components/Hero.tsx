import { Flex, Heading } from '@chakra-ui/react'

export const Hero = ({ title }) => (
  <Flex justifyContent="center" alignItems="center" height="13rem">
    <Heading fontSize="5vw" as="u">{title}</Heading>
  </Flex>
)