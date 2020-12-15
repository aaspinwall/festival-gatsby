import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import Workshops from "../components/UI/Screens/Workshops";
import Talks from "../components/UI/Screens/Talks";
import Content, { HTMLContent } from "../components/Content";
import SignUp from "../components/UI/Sign-up";
import styled from "styled-components";
import Button from "../components/UI/Button";
import c from "../utils/c";
import { Heading, Flex, Box } from "@chakra-ui/core";

//const faker = require("faker");

const Wrapper = styled.article`
  max-width: 1000px;
  margin: auto;
  * {
    font-family: Futura;
  }
  section {
    padding: 2rem 2rem 5rem;
  }
  h1 {
    text-align: center;
  }
  p {
    text-align: center;
  }

  .imgCont {
    max-width: 325px;
    max-height: 325px;
    border-radius: 50%;
  }
  .sponsorimg {
    height: auto;
    min-width: 130px;
    max-width: 200px;
  }
  .bigDescription {
    margin-top: 2rem;
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 2.2rem;
  }

  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
`;

const SignupForm = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const IngWelcomePageTemplate = ({
  title,
  subtitle,
  content,
  contentComponent,
  talks,
  workshops,
  sponsors,
}) => {
  const talksRef = useRef(null);
  const workshopsRef = useRef(null);
  const PageContent = contentComponent || Content;

  const goTo = (e) => {
    const nav = document.querySelector("nav").offsetHeight;
    const trg = document.querySelector(e.target.id);
    trg.scrollIntoView();
  };

  return (
    <Wrapper>
      <Box as='section' bg='y'>
        <Heading as='h1' fontSize='2.5rem' pt='8rem'>
          {title}
        </Heading>
        <p className='bigDescription'>{subtitle}</p>
        <Flex justifyContent={"space-evenly"} pt='2rem'>
          <Button dark={true} id={"#workshops"} onClick={goTo}>
            Online Workshops
          </Button>
          <Button id={"#talks"} onClick={goTo}>
            Online Talks
          </Button>
        </Flex>
      </Box>

      <Talks ref={talksRef} id='talks' talks={talks} />

      <Workshops ref={workshopsRef} id='workshops' workshops={workshops} />

      <SignupForm>
        <Heading textAlign='left'>
          <mark className='highlight'>Sign up for discount alerts!</mark>
        </Heading>
        <SignUp />
      </SignupForm>
    </Wrapper>
  );
};

IngWelcomePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const IngWelcomePage = ({ data }) => {
  const { markdownRemark: post, workshops, talks } = data;

  return (
    <Layout>
      <IngWelcomePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        talks={talks}
        workshops={workshops}
        sponsors={post.frontmatter.sponsors}
        content={post.html}
      />
    </Layout>
  );
};

IngWelcomePage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IngWelcomePage;

export const IngWelcomePageQuery = graphql`
  query IngWelcomePage($id: String!) {
    workshops: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "workshops" } } }
    ) {
      nodes {
        frontmatter {
          author
          title
          maintitle
          speakerimage {
            childImageSharp {
              fluid(maxWidth: 300, quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
    talks: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "talks" } } }
    ) {
      nodes {
        frontmatter {
          author
          title
          maintitle
          speakerimage {
            childImageSharp {
              fluid(maxWidth: 300, quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
        talks {
          author
          heading
          image {
            childImageSharp {
              fluid(maxWidth: 325, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
        workshops {
          author
          heading
          image {
            childImageSharp {
              fluid(maxWidth: 325, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
        sponsors {
          caption
          link
          image {
            childImageSharp {
              fluid(maxWidth: 200, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`;
