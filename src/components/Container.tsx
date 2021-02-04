import { Flex, useColorMode } from "@chakra-ui/react";

export const Container = (props) => {
  const { colorMode } = useColorMode();

  const color = { light: "black", dark: "white" };
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      color={color[colorMode]}
      width="100%"
      {...props}
    />
  );
};
