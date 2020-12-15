import React from "react";
import { Heading, Box } from "@chakra-ui/core";
import Img from "gatsby-image";
import styled from "styled-components";
import Workshop from "../../Molecules/Title_Subtitle";
import ImageGrid from "../../Molecules/ImageGrid";

const Workshops = ({ workshops, ...props }) => {
  return (
    <Box as='section' bg='y' id={props.id}>
      <Box mb='1rem'>
        <Heading as='h3'>Online Workshops</Heading>
      </Box>
      <ImageGrid>
        {workshops.nodes.map((workshop) => (
          <>
            <Workshop
              img={workshop.frontmatter.speakerimage.childImageSharp.fluid}
              heading={workshop.frontmatter.maintitle}
              author={workshop.frontmatter.author}
              link={workshop.frontmatter.title}
              type={"workshops"}
            />
          </>
        ))}
      </ImageGrid>
    </Box>
  );
};

export default Workshops;
