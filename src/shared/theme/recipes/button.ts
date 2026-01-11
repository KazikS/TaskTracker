"use client";
import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
  base: {
    colorPalette: "gray",
  },
  variants: {
    variant: {
      solid: {
        bgGradient: "to-r",
        gradientFrom: "accentPurple.light",
        gradientTo: "accentPurple.dark",
        rounded: "md",
        transition: "all .3s ease-in-out",
        color: "white",
        shadow: "0 4px 6px rgba(102, 126, 234, 0.4)",
        border: "none",
        w: '1/6',
        whiteSpace: { base: "normal", md: "nowrap" },
        textAlign: "center",
        lineHeight: { base: "1.2", md: "normal" },
        py: { base: "3", md: "2" },
        _hover: {
          scale: 1.01,
          bgGradient: "to-r",
          gradientFrom: "accentPurple.light",
          gradientTo: "accentPurple.dark",
        },
      },
    },
  },
});
