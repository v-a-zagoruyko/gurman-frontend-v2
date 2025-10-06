/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import App from "./App.jsx";
import { Home, Menu, NewYearPdf, NotFound } from "pages";
import { MainLayout } from "layouts";

render(
  () => (
    <Router root={App}>
      <Route
        path="/"
        component={() => (
          <MainLayout>
            <Home />
          </MainLayout>
        )}
      />
      <Route
        path="/menu/:slug"
        component={() => (
          <MainLayout>
            <Menu />
          </MainLayout>
        )}
      />
      <Route path="/new-year" component={() => <NewYearPdf />} />
      <Route
        path="*paramName"
        component={() => (
          <MainLayout>
            <NotFound />
          </MainLayout>
        )}
      />
    </Router>
  ),
  document.getElementById("root")
);
