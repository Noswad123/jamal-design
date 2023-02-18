import { Component } from "react";
import styled from "styled-components";
import { Styles } from "../styles";

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
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  box-sizing: border-box;
  position: relative;
`;
const Title = styled.div`
  margin-top: 20px;
  font-family: ${Styles.font.header};
  font-size: ${Styles.size.l};
  border-bottom: solid ${Styles.color.accent};
`;
type props = {
  selectedProject: number;
  isPopUp: boolean;
};

export class Tribute extends Component<{}, props> {
  constructor(props: props) {
    super(props);
    this.state = {
      selectedProject: 0,
      isPopUp: false,
    };
  }
  changePopUp() {
    if (this.state.isPopUp) {
      return { display: "flex" };
    } else {
      return { display: "none" };
    }
  }
  openPopUp(id: number) {
    this.setState({
      isPopUp: true,
      selectedProject: id,
    });
  }
  closePopUp() {
    this.setState({ isPopUp: false });
  }
  render() {
    return (
      <Container>
        <div>
          If I have seen further than others, it is by standing upon the
          shoulders of giants.
        </div>
        <div> Isaac Newton</div>
      </Container>
    );
  }
}
