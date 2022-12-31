import type { Component } from "solid-js";
import { styled } from "solid-styled-components";
import Header from "src/CurriculumVitae/Header";

const CurriculumVitae: Component = () => {
  return (
    <div>
      <Header />
      <LineBreak />
      <h1>Hello World</h1>
    </div>
  );
};

export default CurriculumVitae;

const LineBreak = styled.div`
  border-top: 1px solid lightgray;
`;
