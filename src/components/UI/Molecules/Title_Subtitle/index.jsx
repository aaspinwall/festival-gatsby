import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import { Box, Heading } from "@chakra-ui/core";

const TitleandSub = ({ img, heading, author, link, type }) => {
  const goTo = `/${type}/${link}`;
  return (
    <Box>
      <Link to={goTo}>
        <Img fluid={img} className='imgCont' />
      </Link>
      <Link to={goTo}>
        <Heading as='h5' size='sm' pt='1.5rem'>
          {heading}
        </Heading>
      </Link>
      <div>{author}</div>
    </Box>
  );
};

export default TitleandSub;
