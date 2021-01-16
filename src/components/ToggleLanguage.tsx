import { Button, Text } from "@chakra-ui/react";
import React from "react";

export const ToggleLanguage = ({ language, setLanguage }) => {
    const toggleLanguage = () => {
        if(language === "EN"){
            setLanguage("日本語");
        } else {
            setLanguage("EN");
        }
    }

    return (
        <Button onClick={toggleLanguage} variant="outline" colorScheme="green">
            <Text>{language}</Text>
        </Button>
    );
};
