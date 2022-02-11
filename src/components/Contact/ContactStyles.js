import styled from 'styled-components';

export const Container = styled.div `
width:100%;
display:flex;
background:whitesmoke;
border-radius: 30px;
`;

export const Text = styled.h4 `
color:black;
`
export const Img = styled.img `
  width:100%;
 height:40%;
 margin: 15% 0px 20px 10px;
  object-fit: cover;
  overflow: hidden; 
  position: relative
  
`
export const Btn = styled.button `
 background-color: orange;
  color: white;
  font-size: 1.2em;
  margin: 0 1em; 
  padding: 5px 30px;
  border: 1px solid palevioletred;
  border-radius: 30px;
  cursor: pointer;
  &hover:{
    background: white;
    color:orange;
    transition: ease-in 200ms;
  }
`;

export const Input = styled.input `
width:100%;
font-size: 18px;
padding: 10px 40px;
margin-bottom: 20px;
background: whitesmoke;
border-radius: 30px;
border: no-border:

`;
export const TextArea = styled.textarea `
width:100%;
// height:30%;
font-size: 18px;
padding: 40px;
margin-bottom: 20px;
background: whitesmoke;
border-radius: 30px;
border: no-border:

`;
export const Form = styled.div `
width:100%;
color: rgba(255, 255, 255, 0.5);
background-color: #0F1624;
border: 1px rgb(85, 152, 184) solid;
border-radius: 30px;
font-size: larger;
display: block;
margin:10px;
padding: 20px 40px;
.
`;

export const Label = styled.label `
color:rgba(255, 255, 255, 0.5);
`