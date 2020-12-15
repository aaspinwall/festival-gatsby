import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import { Link, graphql } from "gatsby";
import { Box, Flex, Grid } from "@chakra-ui/core";
import Wrapper, { Social } from "../components/UI/Layouts/WorkshopTalkLayout";
import Button from "../components/UI/Button";
import Recommended from "../components/UI/Molecules/Recommended";
import Layout from "../components/Layout";
import PriceBanner from "../components/UI/Banners/PriceBanner";
import Gallery from "../components/UI/Images/Gallery";
import stairs from "../../static/svg/stairs.svg";
import clock from "../../static/svg/clock.svg";
import share from "../../static/svg/share.svg";

import remark from "remark";
import remarkHTML from "remark-html";

const toHTML = (value) =>
  remark().use(remarkHTML).processSync(value).toString();

const speakerImgStyle = {
  height: "200px",
  width: "200px",
  borderRadius: "50%",
  border: "solid 2px black",
  margin: "0 0 2rem",
};

const TalkTemplate = ({
  maintitle,
  author,
  provided,
  price,
  path,
  templateKey,
  where,
  speakerimage,
  prepare,
  subtitle,
  times,
  aboutspeaker,
  abouttalk,
  howtojoin,
  social,
  images,
  otherTalks,
  url,
}) => {
  const ImagePlaceholder = () => {
    return (
      <Img fluid={speakerimage.childImageSharp.fluid} style={speakerImgStyle} />
    );
  };

  return (
    <Wrapper>
      <Gallery images={images} />

      <Box as='section' className='d'>
        <Button className='hang-right' border='1px solid black' mb='1rem'>
          <img src={share} style={{ width: "1rem", marginRight: "1rem" }} />
          <div>Share</div>
        </Button>
        <Flex className='bigTitle'>
          <Box pr='1rem' className='gr'>
            Online Talk:{" "}
          </Box>
          <mainstrong>{maintitle}</mainstrong>
        </Flex>
        <Box fontWeight='bold'>{`With ${author}`}</Box>
      </Box>

      <Flex as='section' className='d' justifyContent='space-between'>
        <Grid>
          <h5>Where</h5>
          <div>{where}</div>
        </Grid>
        <Grid>
          <h5>When</h5>
          <div>{`${times.start} - ${times.end}`}</div>
        </Grid>
        <Grid>
          <h5>Price going up in</h5>
          <div>...</div>
        </Grid>
      </Flex>

      <Box as='section' className='d'>
        <Grid className='grid-flex'>
          <Flex
            className='hang-right level-length bold'
            alignItems='center'
            justifyContent='space-between'
            w='30%'
          >
            <img src={stairs} style={{ height: "1rem" }} />
            <div>Beginner level</div> <div>|</div>
            <img src={clock} style={{ height: "1rem" }} />
            <div>3 hours</div>
          </Flex>
          <h3>About Speaker</h3>
          <Box>
            <ImagePlaceholder />
            <h4>{author}</h4>
            <h5>Graphic designer</h5>
            <div
              dangerouslySetInnerHTML={{ __html: toHTML(aboutspeaker) }}
            ></div>
            <Social>
              {social.map((element) => (
                <Flex pt='1rem'>
                  <div>{element.name}</div>
                  <a href={element.link} target='blank'>
                    <Box pl='1rem'>{element.link}</Box>
                  </a>
                </Flex>
              ))}
            </Social>
          </Box>
        </Grid>
      </Box>

      <Grid as='section' className='d'>
        <Grid className='grid-flex'>
          <h3>About Online Talk</h3>
          <Box>
            <h4>{author}</h4>
            <h5>Graphic designer</h5>
            <div dangerouslySetInnerHTML={{ __html: toHTML(abouttalk) }}></div>
          </Box>
        </Grid>
      </Grid>

      <Grid as='section' className='d'>
        <Grid className='grid-flex'>
          <h3>How to Join</h3>
          <Box>
            <div dangerouslySetInnerHTML={{ __html: toHTML(howtojoin) }}></div>
          </Box>
        </Grid>
      </Grid>

      <Grid as='section' className='d'>
        <Grid className='grid-flex'>
          <h3>What is provided</h3>
          <Box>
            <div dangerouslySetInnerHTML={{ __html: toHTML(provided) }}></div>
          </Box>
        </Grid>
      </Grid>

      <Grid as='section' className='d'>
        <Grid className='grid-flex'>
          <h3>What to prepare</h3>
          <Box>
            <div dangerouslySetInnerHTML={{ __html: toHTML(prepare) }}></div>
          </Box>
        </Grid>
      </Grid>

      <PriceBanner
        content={{ maintitle, author, type: "Online Workshop:", price }}
      />
      <Recommended
        className='d'
        type={templateKey}
        content={otherTalks}
        speakerImgStyle={speakerImgStyle}
        url={url}
      />
    </Wrapper>
  );
};

const TalkRoute = ({ data }) => {
  const {
    provided,
    path,
    price,
    discounted,
    templateKey,
    maintitle,
    where,
    prepare,
    subtitle,
    speakerimage,
    author,
    aboutspeaker,
    abouttalk,
    howtojoin,
    social,
    images,
    times,
    title,
  } = data.markdownRemark.frontmatter;

  const otherTalks = Object.values(data.talks.nodes).map(
    (el) => el.frontmatter
  );
  console.log(otherTalks);

  return (
    <Layout>
      <TalkTemplate
        provided={provided}
        path={path}
        templateKey={templateKey}
        maintitle={maintitle}
        where={where}
        prepare={prepare}
        subtitle={subtitle}
        author={author}
        times={times}
        aboutspeaker={aboutspeaker}
        abouttalk={abouttalk}
        howtojoin={howtojoin}
        social={social}
        images={images}
        speakerimage={speakerimage}
        price={{ price, discounted }}
        otherTalks={otherTalks}
        url={title}
      />
    </Layout>
  );
};

TalkRoute.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default TalkRoute;

export const talkQuery = graphql`
  query talkQuery($id: String!) {
    talks: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "talks" } } }
    ) {
      nodes {
        frontmatter {
          author
          maintitle
          title
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
        provided
        price
        discounted
        path
        templateKey
        where
        prepare
        maintitle
        subtitle
        author
        times {
          start(formatString: "hh:mm")
          end(formatString: "hh:mma | DD/MMM/YYYY")
        }
        aboutspeaker
        speakerimage {
          childImageSharp {
            fluid(maxWidth: 300, quality: 100) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        abouttalk
        howtojoin
        social {
          name
          link
        }
        images {
          text
          image {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          md: image {
            childImageSharp {
              fluid(maxWidth: 330, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          sm: image {
            childImageSharp {
              fluid(maxWidth: 180, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`;
