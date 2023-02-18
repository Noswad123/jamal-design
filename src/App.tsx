import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { Navbar } from "./components/navbar";
import styled from "styled-components";
import { AboutMe, ContactMe, Home, Tribute, Hobbies } from "./sections";
import { Paths } from "./common";

const Container = styled.div`
  margin: 0;
`;

ReactDOM.render(
  <BrowserRouter>
    <Container>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path={Paths.aboutMe} element={<AboutMe />}></Route>
        <Route path={Paths.tribute} element={<Tribute />}></Route>
        <Route path={Paths.hobbies} element={<Hobbies />}></Route>
        <Route path={Paths.contactMe} element={<ContactMe />}></Route>
      </Routes>
    </Container>
  </BrowserRouter>,
  document.getElementById("root")
);
