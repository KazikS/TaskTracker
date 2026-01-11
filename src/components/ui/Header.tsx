"use client";
import { Flex, Heading, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex
      w="100vw"
      bgGradient="to-r"
      gradientFrom="accentPurple.light"
      gradientTo="accentPurple.dark"
      py="4"
      alignItems="center"
      justifyContent="space-between"
      mb='5'
      px="5"
    >
      <Heading color="white">таск трекер</Heading>
      <Text>by Sabkazz</Text>
    </Flex>
  );
}
