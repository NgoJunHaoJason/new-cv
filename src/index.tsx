/* @refresh reload */
import { render } from "solid-js/web";

import { globalCss, HopeProvider } from "@hope-ui/solid";
import { Component } from "solid-js";
import CurriculumVitae from "src/components/CurriculumVitae";

const globalStyles = globalCss({
  body: {
    margin: 0,
    fontFamily: "$sans",
  },
  code: {
    fontFamily: "$mono",
  },
});

const App: Component = () => {
  globalStyles();

  return (
    <HopeProvider>
      <CurriculumVitae />
    </HopeProvider>
  );
};

render(() => <App />, document.getElementById("root") as HTMLElement);
