import { Box, Divider, useColorModeValue } from "@hope-ui/solid";
import type { Component } from "solid-js";
import Header from "src/components/CurriculumVitae/Header";

const CurriculumVitae: Component = () => {
  const backgroundColor = useColorModeValue("white", "#303030");
  return (
    <Box backgroundColor={backgroundColor()}>
      <br />
      <Header />
      <br />
      <Divider />
      <h1>Hello World</h1>
    </Box>
  );
};

export default CurriculumVitae;
