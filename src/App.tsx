import {BrowserRouter} from "react-router-dom";

import {Router} from "./Router.tsx";

import {ThemeProvider} from "styled-components";
import {GlobalStyle} from "./styles/global.ts";
import {defaultTheme} from "./styles/themes/default.ts";
import {IssuesProvider} from "./contexts/IssuesContext.tsx";

function App() {
  return (
      <ThemeProvider theme={defaultTheme}>
          <BrowserRouter>
              <IssuesProvider>
                  <Router />
              </IssuesProvider>
          </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
  );
}

export default App;
