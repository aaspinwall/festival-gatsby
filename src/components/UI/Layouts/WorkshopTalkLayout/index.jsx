import styled from "styled-components";
export const Social = styled.div`
  display: grid;
`;
const Wrapper = styled.article`
  font-family: Futura;
  max-width: 1000px;
  margin: auto;
  padding: 8rem clamp(1rem, 5vw, 3rem) 6rem;
  > section {
    position: relative;
    margin: 1rem 0 1rem;
    > * {
      /* margin: 1rem 0; */
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
  }
  ul {
  }
  .imageBox {
    width: 100%;
    height: 100%;
    background: #c7c7c7;
  }
  .hang-right {
    position: relative;
    width: 100%;
  }
  .bt {
    margin-bottom: 1rem;
  }
  .grid-flex {
    grid-template-columns: 1fr;
    border-bottom: 1fr grey solid;
    > * {
      padding: 1rem 0;
    }
  }
  .level-length {
    max-width: 50%;
    > * {
      padding: 0 0.25rem;
    }
  }
  .gr {
    color: grey;
  }
  .bigTitle {
    font-size: 2rem;
    font-weight: bold;
    display: inherit;
  }
  .d {
    border-bottom: solid 1px grey;
    padding-bottom: 1rem;
  }
  @media only screen and (min-width: 768px) {
    .bigTitle {
      display: flex;
      justify-content: start;
      max-width: 90%;
    }
    .grid-flex {
      grid-template-columns: 1fr 2fr;
    }
    .hang-right {
      width: auto;
      position: absolute;
      display: flex;
      right: 0;
      top: 0;
    }
    .level-length {
    }
  }
`;

export default Wrapper;
