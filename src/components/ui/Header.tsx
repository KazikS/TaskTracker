"use client";
import { Flex, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex
      w="100vw"
      bgColor="black"
      py="4"
      alignItems="center"
      justifyContent="center"
      mb='5'
    >
      <Text color="white">SABKAZZ</Text>
    </Flex>
  );
}
