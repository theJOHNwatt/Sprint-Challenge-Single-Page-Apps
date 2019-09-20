import React, {Component} from "react";
import styled from 'styled-components';

const CardContainer = styled.div `
display: inline-flex;
margin: 15px;
text-align: center;
background: rgba(187, 159, 0, 0.699);
border-radius: 5px;
box-shadow: 0px 0px 10px 5px rgba(0,0,0,.1);
`;

const Card = styled.div `


`;
const CardDiv = styled.div`


`;


export default function CharacterCard(props) {
  return (
    
   <CardContainer>
    <Card
       key={props.id}>
         <CardDiv>
        <h3>{props.name}</h3>
       <img src={props.image}></img>
        <p>Species: {props.species}</p> 
        <p>Gender: {props.gender}</p>
        </CardDiv>
    </Card>
    </CardContainer> 
  )
}




