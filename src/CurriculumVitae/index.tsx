import { Divider } from "@hope-ui/solid";
import type { Component } from "solid-js";
import Header from "src/CurriculumVitae/Header";

const CurriculumVitae: Component = () => {
  return (
    <div>
      <br />
      <Header />
      <br />
      <Divider />
      <h1>Hello World</h1>
    </div>
  );
};

export default CurriculumVitae;
