import { LinkIcon } from "@chakra-ui/icons";
import { Box, Badge, Link, Text} from "@chakra-ui/react"
import React from "react"

type ProjectCards = {
    title: string,
    summary: string,
    dependencies: string,
    url: string,
}

export const ProjectCard: React.FC<ProjectCards> = ({ title, dependencies, summary, url }) => {
    return (
      <Box borderWidth="1px" overflow="hidden">
        <Box p="10">
          <Box d="flex" alignItems="baseline" pb="4">
            <Badge borderRadius="full" p="1" width="100%" variant="outline" colorScheme="green">
              <Text align="center" isTruncated>{dependencies}</Text>
            </Badge>
          </Box>
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            <LinkIcon as={LinkIcon} pr="1"/>
            <Link href={url} color="purple.300">{title}</Link>
          </Box>
          <Box>
          </Box>
          <Box d="flex" mt="2" alignItems="center">
            </Box>
            <Box><Text>{summary}</Text></Box>
        </Box>
      </Box>
    )
  };

  export default ProjectCard