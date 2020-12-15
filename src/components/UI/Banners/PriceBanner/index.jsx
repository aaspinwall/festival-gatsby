import React from "react";
import styled from "styled-components";
import Button from "../../Button";
import { Box, Flex, Grid } from "@chakra-ui/core";

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 999;
  width: 100%;
  box-shadow: 0px 15px 33px 8px rgba(0, 0, 0, 0.2);
  padding: 1rem 2rem;
  background: white;
  margin: 2rem auto 0;
  border-radius: 18px;

  #banner-grid {
    grid-template-columns: 1fr;
  }

  @media only screen and (min-width: 768px) {
    border-radius: 0;
    #banner-grid {
      grid-template-columns: 60% 1fr;
    }
  }

  .crossed {
    position: relative;

    ::before {
      position: absolute;
      content: "";
      left: 0;
      top: 50%;
      right: 0;
      border-top: 2px solid;
      border-color: #ffda27;

      -webkit-transform: rotate(-5deg);
      -moz-transform: rotate(-5deg);
      -ms-transform: rotate(-5deg);
      -o-transform: rotate(-5deg);
      transform: rotate(-5deg);
    }
  }
  .price {
    font-weight: bold;
    font-size: 2rem;
    *:last-child {
      font-size: 1rem;
      font-weight: normal;
    }
  }
`;

const Banner = ({ content }) => {
  const {
    maintitle,
    author,
    type,
    price: { price, discounted },
  } = content;

  return (
    <Wrapper>
      <Grid id='banner-grid'>
        <Box className='bold'>
          <Box className='gr'>{type}</Box>
          <Box>{maintitle}</Box>
          <Box> {`With: ${author}`}</Box>
        </Box>
        <Flex
          alignItems='center'
          justifyContent='space-around'
          wrap='wrap'
          p={[2, 1, 0, 0]}
        >
          <Flex className='crossed' color='y'>
            <div>{`${discounted}`}</div>
            <div>USD</div>
          </Flex>

          <Flex className='price'>
            <div>{price}</div>
            <div>USD</div>
          </Flex>
          <Button border='1px solid black'>Book a Spot</Button>
        </Flex>
      </Grid>
    </Wrapper>
  );
};

export default Banner;
