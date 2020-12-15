import React from "react";
import { Box, Flex, Grid } from "@chakra-ui/core";
import Img from "gatsby-image";
import { Link } from "gatsby";
import styled from "styled-components";
import _cap from "lodash/capitalize";

const RecommendedWrapper = styled.article`
  #recommended-array {
    padding-top: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    .rec-im {
      flex-basis: 50%;
      padding: 0 1rem 1rem;
    }
  }
  @media only screen and (min-width: 768px) {
    #recommended-array {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
  }
`;

const Recommended = ({ content, speakerImgStyle, url, type, ...props }) => {
  console.log(speakerImgStyle);

  const thumbStyle = {
    ...speakerImgStyle,
    width: "100px",
    height: "100px",
    margin: 0,
  };

  const contentDebug = content.concat(content).concat(content).concat(content);

  return (
    <RecommendedWrapper {...props} className={props.className || ""}>
      <h3>{`Online ${_cap(type)} you may like`}</h3>
      <Box id='recommended-array'>
        {content.map((el, i) => {
          if (el.title !== url && i <= 6) {
            const linkTo = `/${type}/${el.title}`;
            return (
              <Flex className='rec-im'>
                <Link to={linkTo}>
                  <Img
                    fluid={el.speakerimage.childImageSharp.fluid}
                    style={thumbStyle}
                  ></Img>
                  <div>{el.author}</div>
                  <div>{el.maintitle}</div>
                </Link>
              </Flex>
            );
          }
        })}
      </Box>
    </RecommendedWrapper>
  );
};

export default Recommended;
