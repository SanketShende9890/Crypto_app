import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import SinglePage from "./components/SinglePage.js";
import Market from "./components/Market.js";
import Login from "./components/Login.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/coin/:coinId" element={<SinglePage />} />
          <Route path="/market" element={<Market />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
        <Routes></Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
