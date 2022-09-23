import { Routes, Route, HashRouter } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import Layout from "../Layout";

const RoutesWrapper = () => {
  return (
    // Using HashRouter because BrowserRouter doesn't work with github pages.
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default RoutesWrapper;
