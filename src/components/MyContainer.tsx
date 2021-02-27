import { Flex } from "@chakra-ui/react";

export const MyContainer = (props) => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      color="dark"
      width="100%"
      {...props}
    />
  );
};
