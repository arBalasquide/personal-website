import { Box, Badge, Link } from "@chakra-ui/react"
import React from "react"

type ProjectCards = {
    title: string,
    summary: string,
    dependencies: string,
    url: string,
}

export const ProjectCard: React.FC<ProjectCards> = ({ title, dependencies, summary, url }) => {
    return (
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              {dependencies}
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
            </Box>
          </Box>
  
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            <Link href={url}>{title}</Link>
          </Box>
  
          <Box>
          </Box>
          <Box d="flex" mt="2" alignItems="center">
            </Box>
            <Box>{summary}</Box>
        </Box>
      </Box>
    )
  };

  export default ProjectCard