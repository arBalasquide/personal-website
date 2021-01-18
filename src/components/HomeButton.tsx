import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Link } from "@chakra-ui/react";
import React from "react"

export const HomeButton = () => {
    return (
        <Flex  position="fixed"top="1rem"
        right="2rem">
            <Link href="/">
                <IconButton aria-label="Home" icon={<ArrowLeftIcon />} colorScheme="green" />
            </Link>
        </Flex>
    );
};

export default HomeButton