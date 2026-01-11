import { defineRecipe } from "@chakra-ui/react";

export const inputRecipe = defineRecipe({
  className: "chakra-input",
  base: {
    borderRadius: "2xl",
    color: "text.body",
    _placeholder: {
      color: "text.subtle",
    },
  },
  variants: {
    variant: {
      outline: {
        borderWidth: "2px",
        borderColor: 'border.input'
      },
    },
  },
});
