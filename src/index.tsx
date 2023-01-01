/* @refresh reload */
import { render } from "solid-js/web";

import { globalCss, HopeProvider, HopeThemeConfig } from "@hope-ui/solid";
import { Component } from "solid-js";
import CurriculumVitae from "src/components/CurriculumVitae";

const hopeThemeConfig: HopeThemeConfig = {
  initialColorMode: "system",
};

const App: Component = () => {
  return (
    <HopeProvider config={hopeThemeConfig}>
      <CurriculumVitae />
    </HopeProvider>
  );
};

render(() => <App />, document.getElementById("root") as HTMLElement);
