import React from "react";
import { Wrapper } from "./elements";
import {
  Heading,
  Grid,
  Box,
  Flex,
  Stack,
  Text,
  IconButton,
  Link,
  Divider,
} from "@chakra-ui/core";
import Button from "../Button";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <Divider />
      <Flex
        id='footer-content'
        alignItems='center'
        justifyContent='space-around'
      >
        <Grid>
          <Heading>Let's talk</Heading>
          <Text>Do you have any questions or want to collaborate?</Text>
        </Grid>

        <Flex justifyContent='space-between'>
          <Button dark={true}>Email Us</Button>
          <Box>Or</Box>
          <Button dark={true} icon={FaInstagram} />
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default Footer;
