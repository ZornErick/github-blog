import {BrowserRouter} from "react-router-dom";

import {Router} from "./Router.tsx";

import {ThemeProvider} from "styled-components";
import {GlobalStyle} from "./styles/global.ts";
import {defaultTheme} from "./styles/themes/default.ts";

function App() {
  return (
      <ThemeProvider theme={defaultTheme}>
          <BrowserRouter>
              <Router />
          </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
  );
}

export default App;
