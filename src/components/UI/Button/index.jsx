import React from "react";
import styled from "styled-components";
import { Button, IconButton } from "@chakra-ui/core";

const Wrapper = styled.div``;

const Sample = ({ children, dark, icon, ...props }) => {
  return (
    <Wrapper>
      {!icon ? (
        <Button
          {...props}
          bg={dark ? "black" : "white"}
          color={!dark ? "black" : "white"}
          _hover={dark ? "grey" : "gray"}
          borderRadius='18px'
          p={[5, 5, 5, 5]}
        >
          {children}
        </Button>
      ) : (
        <IconButton
          {...props}
          bg={dark ? "black" : "white"}
          color={!dark ? "black" : "white"}
          _hover={dark ? "grey" : "gray"}
          borderRadius='18px'
          p={[5, 5, 5, 5]}
          icon={icon}
        ></IconButton>
      )}
    </Wrapper>
  );
};

export default Sample;
