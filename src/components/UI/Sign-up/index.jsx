import React from "react";
import { Wrapper } from "./elements";
import { Input, Text, Flex } from "@chakra-ui/core";
import Button from "../Button";

const MailingListSignUp = () => {
  return (
    <Wrapper>
      <Flex>
        <Input /> <Button dark={true}>Sign me up!</Button>
      </Flex>
    </Wrapper>
  );
};

export default MailingListSignUp;
