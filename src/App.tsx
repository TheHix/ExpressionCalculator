import React from "react";
import Layout from "./components/layout/Layout";
import ErrorBoundary from "./components/shared/errorBoundary/ErrorBoundary";
import Root from "./components/shared/root/Root";
import "./styles/globalStyles.css";
import "./styles/normalize.css";

const App = () => {
  return (
    <ErrorBoundary>
      <Layout>
        <Root />
      </Layout>
    </ErrorBoundary>
  );
};
export default App;
