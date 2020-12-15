import React from "react";
import { Heading, Box } from "@chakra-ui/core";
import Img from "gatsby-image";
import styled from "styled-components";
import Talk from "../../Molecules/Title_Subtitle";
import ImageGrid from "../../Molecules/ImageGrid";

const Talks = ({ talks, ...props }) => {
  return (
    <Box as='section' id={props.id}>
      <Box mb='1rem'>
        <Heading as='h3' size='xl' textTransform='capitalize'>
          Online Talks
        </Heading>
      </Box>
      <ImageGrid>
        {talks.nodes.map((talk) => (
          <Talk
            img={talk.frontmatter.speakerimage.childImageSharp.fluid}
            heading={talk.frontmatter.maintitle}
            author={talk.frontmatter.author}
            link={talk.frontmatter.title}
            type={"talks"}
          />
        ))}
      </ImageGrid>
    </Box>
  );
};

export default Talks;
