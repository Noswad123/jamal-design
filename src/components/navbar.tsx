import { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Paths } from "../common";
import { Styles } from "../styles";

const Container = styled.div`
  background-color: ${Styles.color.primary};
  color: ${Styles.color.font1};
  width: 100%;
  height: 80px;
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  a {
    text-decoration: none;
  }
  @media (max-width: 675px) {
    padding: 0 20px;
    img {
      display: flex;
    }
  }
`;
const Links = styled.ul`
  list-style: none;
  @media (max-width: 675px) {
    display: none;
  }
  li {
    display: inline-block;
    font-size: ${Styles.size.s};
    color: white;
    margin-right: 20px;
    padding: 8px;
    border: solid ${Styles.color.primary};
    &:hover {
      border: solid ${Styles.color.secondary};
      a {
        color: ${Styles.color.accent};
        text-decoration: none;
      }
    }
    a {
      color: ${Styles.color.font1};
      text-decoration: none;
      font-family: ${Styles.font.text};
    }
  }
`;
const Name = styled.div`
  font-family: ${Styles.font.header};
  color: ${Styles.color.font1};
  font-size: ${Styles.size.m};
  width: 200px;
  display: inline-block;
`;
const Mobile = styled.div`
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  box-sizing: border-box;
  background-color: ${Styles.color.primary};
  width: 100%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 50px;
  min-height: 300px;
  border: solid black;
  a {
    font-family: ${Styles.font.text};
    color: white;
  }
`;

const Close = styled.div`
  position: absolute;
  top: 0;
  right: 20px;
  cursor: pointer;
`;

const Hamburger = styled.img`
  display: none;
  height: 40px;
`;

type props = { isMobile: boolean };
export class Navbar extends Component<{}, props> {
  constructor() {
    super({ isMobile: false });
    this.state = {
      isMobile: false,
    };
  }
  toggleMobile(isMobile: boolean) {
    this.setState({ isMobile });
  }
  render() {
    return (
      <Container>
        <Link to={Paths.home}>
          <Name>Jamal</Name>
        </Link>
        <Links>
          <li>
            <Link to={Paths.aboutMe}>About</Link>
          </li>
          <li>
            <Link to={Paths.hobbies}>Hobbies</Link>
          </li>
          <li>
            <Link to={Paths.tribute}>Tribute</Link>
          </li>
          <li>
            <Link to={Paths.contactMe}>Contact</Link>
          </li>
        </Links>

        <Mobile style={{ display: `${this.state.isMobile ? "flex" : "none"}` }}>
          <Close onClick={() => this.toggleMobile(false)}>X</Close>

          <Link to="/aboutme" onClick={() => this.toggleMobile(false)}>
            About
          </Link>

          <Link to="/skills" onClick={() => this.toggleMobile(false)}>
            {" "}
            Skills
          </Link>

          <Link to="/portfolio" onClick={() => this.toggleMobile(false)}>
            {" "}
            Portfolio
          </Link>

          <Link to="/contactme" onClick={() => this.toggleMobile(false)}>
            Contact
          </Link>
        </Mobile>

        <Hamburger
          src="./img/hamburger.png"
          onClick={() => this.toggleMobile(true)}
        />
      </Container>
    );
  }
}
