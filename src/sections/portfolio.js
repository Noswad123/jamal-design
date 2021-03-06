import React, { Component } from "react";
import styled from "styled-components";
import Styles from "../js/styles/styles";
import Project from "./project";
import Projects from "../data/projects.data";
import PopUP from "../js/components/popup";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  font-family: ${Styles.font.text};
  width: 100%;
  flex-direction: column;
  align-items: center;
  color: ${Styles.color.font1};
  padding: 60px;
  background-color: ${Styles.grey};
  box-sizing: border-box;
  button {
    border-radius: ${Styles.size.m};
    height: ${Styles.size.m};
    width: ${Styles.size.xl};
    border: none;
    background-color: ${Styles.color.primary};
    font-size: ${Styles.size.s};
    font-family: ${Styles.font.text};
    color: ${Styles.color.font1};
    cursor: pointer;
    &:hover {
      background-color: white;
      color: ${Styles.grey};
    }
  }
`;
const Wrapper = styled.div`
    display:flex;
    flex-wrap:wrap;
    width: 100%;
    justify-content:space-between;
    align-items:center;
    padding:50px;
    box-sizing:border-box;
    position:relative;
    
    }
}
`;
const Title = styled.div`
  margin-top: 20px;
  font-family: ${Styles.font.header};
  font-size: ${Styles.size.l};
  border-bottom: solid ${Styles.color.accent};
`;

export default class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      selectedProject: 0,
      isPopUp: false
    };
  }
  changePopUp() {
    if (this.state.isPopUp) {
      return { display: "flex" };
    } else {
      return { display: "none" };
    }
  }
  openPopUp(id) {
    console.log(id);
    this.setState({
      isPopUp: true,
      selectedProject: id
    });
  }
  closePopUp() {
    this.setState({ isPopUp: false });
  }
  render() {
    return (
      <Container>
        <Title>Portfolio</Title>
        <PopUP
          closePopUp={this.closePopUp.bind(this)}
          display={this.changePopUp()}
          img={Projects[this.state.selectedProject].imgUrl}
          name={Projects[this.state.selectedProject].name}
          description={Projects[this.state.selectedProject].description}
          url={Projects[this.state.selectedProject].url}
          tech={Projects[this.state.selectedProject].tech}
        />

        <Wrapper>
          {Projects.map((x, index) => {
            return (
              <Project
                key={index}
                id={index}
                img={x.imgUrl}
                openPopUp={this.openPopUp.bind(this)}
                name={x.name}
                description={x.description}
                status={x.status}
                url={x.myUrl}
              />
            );
          })}
        </Wrapper>

        <Link to="/contactme">
          <button>Contact Me</button>
        </Link>
      </Container>
    );
  }
}
