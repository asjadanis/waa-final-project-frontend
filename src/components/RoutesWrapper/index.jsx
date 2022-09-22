import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import Layout from "../Layout";

const RoutesWrapper = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default RoutesWrapper;
