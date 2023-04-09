import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, link }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <VStack bg="white" borderRadius="xl" spacing={4} align="stretch">
      <Image
        pt={"50"}
        borderRadius="xl"
        boxSize="200px"
        objectFit="contain"
        src={imageSrc}
        alt="Card Image"
        width="100%"
        height="100%"
      />
      <Heading px="4" color="black" as="h4" size="md">
        {title}
      </Heading>
      <Text px="4" color="gray.500" fontSize="md">
        {description}
      </Text>
      <a href={link}>
        <HStack px="4" pb="4">
          <Text color="black" fontSize="md">
            see more
          </Text>
          <FontAwesomeIcon style={{ color: "black" }} icon={faArrowRight} />
        </HStack>
      </a>
    </VStack>
  );
};

export default Card;
