import React, { useState, useEffect, useCallback } from "react";

import Img from "gatsby-image";
import Popup from "../../Screens/Popup";
import { Box, Flex, Grid } from "@chakra-ui/core";
import styled from "styled-components";

import getTopElement from "../../../../utils/getTopElement";

const Wrapper = styled.section`
  .imageWrapper {
    > * {
      max-height: 90vh;
    }
  }
  user-select: none;
  .gallery-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: white;
    width: 2rem;
    height: 2rem;
    text-align: center;
  }

  .small {
    display: grid;
    width: 100%;
  }
  .large {
    display: none;
  }
  #down,
  #up {
    position: absolute;
    top: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    font-size: 1.5rem;
    cursor: pointer;
  }
  #down {
    left: 0;
  }
  #up {
    right: 0;
  }
  @media only screen and (min-width: 768px) {
    .small {
      display: none;
    }
    .large {
      display: grid;

      grid-template-columns: 2fr 1fr;
      gap: 0.33rem;
    }
  }
`;

const Gallery = ({ images }) => {
  const [isOpen, togglePopup] = useState(false);
  const [index, setIndex] = useState(0);
  const [max] = useState(images.length - 1);
  const roll = useCallback(
    (e) => {
      const flag = e.target.id;

      const i = index;
      const q = flag === "up" ? i + 1 : i - 1;
      console.log(`values are i: ${i}, q: ${q}, flag: ${flag}`);
      if (flag === "up") {
        console.log(q <= max ? q : 0);
        setIndex(q <= max ? q : 0);
      } else {
        console.log(q > 0 ? q : max);
        setIndex(q > 0 ? q : max);
      }
    },
    [max, index]
  );

  const handlePopup = (e) => {
    const top = getTopElement(e, "imageContainer");
    togglePopup(true);
    setIndex(top.id.split("_")[0]);
    console.log(top.id);
  };

  useEffect(() => {
    document.querySelectorAll(".imageWrapper").forEach((el, i) => {
      el.id = i + "_imageContainer";
    });
  }, []);

  const That = ({ images, index, roll, popup }) => (
    <Box pos='relative' className={popup ? "" : "small"}>
      <div className='imageWrapper'>
        <Img
          fluid={images[index].image.childImageSharp.fluid}
          alt={images[index].text}
        />
      </div>
      <div onClick={roll} id='down'>
        <div className='gallery-btn'>{`<`}</div>
      </div>
      <div onClick={roll} id='up'>
        <div className='gallery-btn'>{`>`}</div>
      </div>
    </Box>
  );

  return (
    <Wrapper>
      <Popup state={{ isOpen, togglePopup }}>
        <That images={images} index={index} roll={roll} popup={true} />
      </Popup>
      <div className='large'>
        <Grid gridTemplateColumns='1fr 1fr' gap='.33rem'>
          <div className='imageWrapper' onClick={handlePopup}>
            <Img
              fluid={images[0].md.childImageSharp.fluid}
              alt={images[0].text}
            />
          </div>
          <div className='imageWrapper' onClick={handlePopup}>
            <Img
              fluid={images[1].md.childImageSharp.fluid}
              alt={images[1].text}
            />
          </div>
        </Grid>
        <Grid
          gridTemplateColumns='1fr 1fr'
          gridTemplateRows='1fr 1fr'
          gap='.33rem'
        >
          <div className='imageWrapper' onClick={handlePopup}>
            <Img
              fluid={images[2].sm.childImageSharp.fluid}
              alt={images[2].text}
            />
          </div>
          <div className='imageWrapper' onClick={handlePopup}>
            <Img
              fluid={images[3].sm.childImageSharp.fluid}
              alt={images[3].text}
            />
          </div>
          <div className='imageWrapper' onClick={handlePopup}>
            <Img
              fluid={images[4].sm.childImageSharp.fluid}
              alt={images[4].text}
            />
          </div>
          <div className='imageWrapper' onClick={handlePopup}>
            <Img
              fluid={images[5].sm.childImageSharp.fluid}
              alt={images[5].text}
            />
          </div>
        </Grid>
      </div>
      <That images={images} index={index} roll={roll} popup={false} />
    </Wrapper>
  );
};

export default Gallery;
