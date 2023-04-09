import React from "react";
import { Avatar, Box, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Ayodele";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={3}>
      <Avatar
        size="2xl"
        name="Ajijola Ayodele"
        src="https://scontent-los2-1.xx.fbcdn.net/v/t1.6435-1/178666171_4104267702970548_1370443181974927281_n.jpg?stp=dst-jpg_p160x160&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=_SymkAn0Ce0AX-ALfE3&_nc_ht=scontent-los2-1.xx&oh=00_AfCKEQNT5U46xxp3rRq4dCs0xil24E2jdJNsnSjhfReuLg&oe=6459FBFC"
      />

      <b>{greeting}</b>

      <Heading style={{ paddingTop: "1em" }}>{bio1}</Heading>

      <Heading style={{ paddingTop: "0.1em" }}>{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
