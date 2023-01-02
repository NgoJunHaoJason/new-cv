import type { Component } from "solid-js";
import { styled } from "solid-styled-components";
import Header from "src/components/CurriculumVitae/Header";

const CurriculumVitae: Component = () => {
  return (
    <StyledCurriculumVitae>
      <br />
      <Header />
      <br />
      <hr />
      <h1>Hello World</h1>
    </StyledCurriculumVitae>
  );
};

export default CurriculumVitae;

const StyledCurriculumVitae = styled.div`
  background-color: white;

  @media (prefers-color-scheme: dark) {
    background-color: #303030;
  }
`;
