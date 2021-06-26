import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  CssBaseline,
  createMuiTheme,
  MuiThemeProvider,
} from "@material-ui/core";
import { createClient, Provider } from "urql";

const client = createClient({
  url: "http://localhost:5000/graphql",
});

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider value={client}>
      <CssBaseline />
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
