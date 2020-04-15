import * as React from "react";
import { render } from "react-dom";
import { IsMobileProvider } from "./is-mobile";
import { IntlProvider } from 'react-intl';
import Page from "./App";

const rootElement = document.getElementById("root");
render(
  <IntlProvider locale="en">
    <IsMobileProvider>
      <Page />
    </IsMobileProvider>
  </IntlProvider>,
  rootElement
);
