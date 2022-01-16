import {
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react"
import { StoryContext } from "@storybook/react"
import React from "react"
import { withPerformance } from "storybook-addon-performance"

const withChakra = (StoryFn: Function, context: StoryContext) => {

  return (
    <ChakraProvider theme={extendTheme({
      styles: {
        global: {
          body: {
            backgroundColor: "cyan.700",
          },
        },
      },
    })}>
      <StoryFn />
    </ChakraProvider>
  )
}

export const decorators = [withChakra, withPerformance]
