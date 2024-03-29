import styled from "styled-components";
import { Component } from "react";
import { Styles } from "../styles";

const Container = styled.div`
  display: flex;
  width: 70%;
  background-color: ${Styles.color.primary};
  padding: 20px;
  height: 300px;
  position: fixed;
  top: 25%;
  left: 15%;
  z-index: 5;
  overflow-y: scroll;
  h3 {
    font-family: ${Styles.font.title};
    letter-spacing: 2px;
  }
  color: ${Styles.color.font1};
  @media (max-width: 975px) {
    width: 90%;
    left: 0;
  }
`;
const Picture = styled.img`
  height: 300px;
  max-width: 400px;
  cursor: pointer;
`;
const Name = styled.div`
  font-size: ${Styles.size.m};
  font-family: ${Styles.font.title};
`;

const Description = styled.p`
  line-height: 1.6;
  letter-spacing: 2px;
  font-family: ${Styles.font.header};
  padding: 50px 0;
`;
const TechWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  img {
    height: 50px;
    margin: 10px;
  }
`;
const Availability = styled.div`
  a {
    color: ${Styles.color.accent};
  }
  padding: 20px;
`;
const XContainer = styled.div`
  color: white;
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
`;
const TextWrap = styled.div`
  width: 40%;
  @media (max-width: 975px) {
    width: 90%;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  @media (max-width: 975px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
type props = {
  display: any;
  url: string;
  img: string;
  tech: string[];
  description: string;
  name: string;
  closePopUp: () => void;
};
export class PopUp extends Component<props, {}> {
  render() {
    return (
      <Container style={this.props.display}>
        <X closePopUp={this.props.closePopUp} />
        <Wrapper>
          <a href={this.props.url} target="_blank">
            {" "}
            <Picture src={this.props.img} alt={this.props.name} />
          </a>
          <TextWrap>
            <Name>{this.props.name}</Name>

            <Description>{this.props.description}</Description>
            <h3>Technologies Used:</h3>
            <Tech picList={this.props.tech} />

            <Availability>
              <a href={this.props.url} target="_blank">
                View Now
              </a>
            </Availability>
          </TextWrap>
        </Wrapper>
      </Container>
    );
  }
}

type xProps = {
  closePopUp: () => void;
};

class X extends Component<xProps, {}> {
  render() {
    return <XContainer onClick={() => this.props.closePopUp()}>X</XContainer>;
  }
}

type TechProps = {
  picList: string[];
};
class Tech extends Component<TechProps, {}> {
  render() {
    return (
      <TechWrapper>
        {this.props.picList.map((element, index) => (
          <img src={element} key={index} alt={"image" + index} />
        ))}
      </TechWrapper>
    );
  }
}
