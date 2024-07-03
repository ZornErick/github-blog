import {ThemeProvider} from "styled-components";
import {GlobalStyle} from "./styles/global.ts";
import {defaultTheme} from "./styles/themes/default.ts";

function App() {
  return (
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
      </ThemeProvider>
  );
}

export default App;
