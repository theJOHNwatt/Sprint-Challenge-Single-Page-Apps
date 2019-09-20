import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";
import styled from 'styled-components';

const NavBar = styled.div `
// border: 1px red solid;
display: flex;
justify-content: space-evenly;
width:80%;
margin: 0 auto;
border-radius: 5px;
h2{
  color: black;
}
box-shadow: 0px 0px 10px 5px rgba(0,0,0,.1);
`;

const Heading = styled.div `
h1{
// border: 1px red solid;
text-align: center;

}
`;

export default function Header() {
  return (
    <Heading>
      <h1>Rick and Morty Fan Page</h1>
      <NavBar className='nav'>
        <NavLink key={1} to={'/'}><h2>Home</h2></NavLink>
        <NavLink key={2} to={'/list/'}><h2>Characters</h2></NavLink> 
        <NavLink key={3} to={'/search/'}><h2>Search</h2></NavLink>      
      </NavBar>
    </Heading>
  );
}