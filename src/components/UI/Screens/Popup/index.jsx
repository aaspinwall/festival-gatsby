import React from "react";
import { Box } from "@chakra-ui/core";
import styled from "styled-components";
import close from "./close.svg";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 !important;

  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 3000;
  top: 0;
  left: 0;
  background: #a0aec06b;

  #popup {
    width: clamp(200px, 80%, 1000px);
    position: relative;
    background: white;
    border-radius: 21px;
    margin: 2rem auto auto;
    padding: clamp(1rem, 5vh, 2rem) clamp(1rem, 3vw, 2rem);
  }
  /*    #popup {
    width: clamp(300px, 64%, 1000px);    
    padding: 1vh 12vw;
  }  */

  #close {
    transition: 0.7s ease-in-out;
    position: absolute;
    right: 0;
    top: 0;
    background: white;
    border-radius: 50%;
    border: 1px solid black;
    transform: translate(50%, -50%);
    width: clamp(2rem, 7vw, 3rem);
    :hover {
      filter: brightness(0.9);
    }
  }
`;

const Popup = ({ children, toggle, state, time, ...props }) => {
  const [isOpen, updateState] = React.useState(state.isOpen || false);

  const closePopup = () => {
    state.togglePopup(false);
    updateState(false);
  };

  React.useEffect(() => {
    if (time) {
      setTimeout(() => {
        updateState(true);
      }, time * 1000);
    }
  }, []);

  React.useEffect(() => {
    console.log(state, "changed");
    updateState(state.isOpen);
  }, [state]);

  return isOpen ? (
    <Wrapper {...props}>
      <div id='popup'>
        <img onClick={closePopup} id='close' src={close} />
        <div>{children}</div>
      </div>
    </Wrapper>
  ) : null;
};

export default Popup;
