/* @refresh reload */
import { I18nContext } from '@solid-primitives/i18n'
import { type Component } from 'solid-js'
import { render } from 'solid-js/web'
import { createGlobalStyles } from 'solid-styled-components'
import CurriculumVitae from 'src/components/CurriculumVitae'
import i18nContext from 'src/contexts/i18nContext'

const GlobalStyles = createGlobalStyles`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-color: white;

    @media (prefers-color-scheme: dark) {
      background-color: #303030;
    }
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  h1, h2, h3, h4, h5, h6, p {
    color: black;
    margin: 0;
  }

  @media (prefers-color-scheme: dark) {
    h1, h2, h3, h4, h5, h6, p {
      color: white;
    }
  }
`

const App: Component = () => (
  <I18nContext.Provider value={i18nContext}>
    <GlobalStyles />
    <CurriculumVitae />
  </I18nContext.Provider>
)

render(() => <App />, document.getElementById('root') as HTMLElement)
