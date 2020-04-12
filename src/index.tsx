import * as React from "react";
import { render } from "react-dom";
import { IsMobileProvider } from "./is-mobile";

import Page from "./App";

const rootElement = document.getElementById("root");
render(
  <IsMobileProvider>
    <Page />
  </IsMobileProvider>,
  rootElement
);
