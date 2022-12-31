/* @refresh reload */
import { render } from "solid-js/web";

import { Component } from "solid-js";
import { createGlobalStyles } from "solid-styled-components";
import CurriculumVitae from "src/CurriculumVitae";

const GlobalStyles = createGlobalStyles`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

const App: Component = () => (
  <>
    <GlobalStyles />
    <CurriculumVitae />
  </>
);

render(() => <App />, document.getElementById("root") as HTMLElement);
