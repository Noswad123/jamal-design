import styled from 'styled-components';
import React, {Component} from 'react';
import Styles from '../styles/styles';

const Container=styled.div`
display:flex;
width:70%;
background-color:${Styles.color.primary};
padding:20px;
height:300px;
position:fixed;
top:25%;
left:15%;
z-index:5;
overflow-y:scroll;

color:${Styles.color.font1};
@media (max-width:975px){
    width:90%;
    left:0;
}
`
const Picture=styled.img`
height:300px;
max-width:400px;
cursor:pointer;
`
const Name=styled.div`
font-size:${Styles.size.m};`

const Description=styled.p``
const TechWrapper=styled.div`
display:flex;
flex-wrap:wrap;
img{
    height:50px;
    margin:10px;
}`
const Availability=styled.div`
a{
    color:${Styles.color.accent};
}`
const XContainer=styled.div`
color:white;
position:absolute;
right:10px;
top:10px;
cursor:pointer;
`
const TextWrap=styled.div`
    width:40%;
    @media (max-width:975px){
        width:90%;
    }
`
const Wrapper=styled.div`
    width:100%;
    display:flex;
    margin-top:20px;
    justify-content:space-between;
    @media (max-width:975px){
        display:flex;
        flex-direction:column;
        align-items:center;

    }

`
export default class PopUp extends Component{
   
    render(){
        return(
            <Container style={this.props.display}>
            <X closePopUp={this.props.closePopUp} />
            <Wrapper>
                
            <a href={this.props.url} target="_blank"> <Picture src={this.props.img} alt={this.props.name}/></a>
                <TextWrap>
                <Name>
                    {this.props.name}
                </Name>
                
                <Description>
                    {this.props.description}
                </Description>
                <h3>Technologies Used:</h3>
                <Tech picList={this.props.tech}/>
                     
                <Availability>
                   <a href={this.props.url} target="_blank">View Now</a>
                </Availability>
             
                </TextWrap>
                </Wrapper>
            </Container>
        )
    }
}

class X extends Component{
    render(){
        return(
            <XContainer onClick={()=>this.props.closePopUp()}>
                X
            </XContainer>
        )
    }
}

class Tech extends Component{
    render(){
        return(
            <TechWrapper>
                {
                    this.props.picList.map((element, index)=><img src={element} key={index} alt={"image"+index}/>)
                }
                </TechWrapper>
        )
    }
}