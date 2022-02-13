import styled from 'styled-components';

export const Container = styled.div `
max-width: 1040px;
display:flex;
background:whitesmoke;
border-radius: 10px;

@media ${props => props.theme.breakpoints.md}{
  display: flex;
  justify-content: center;
  align-items: center;
}

@media ${props => props.theme.breakpoints.sm}{
  display: flex;
	width: 100%;
  flex-direction: column;
  align-items: center;
}
`;

export const Text = styled.h4 `
color:#333;
margin-left: 8px;
letter-spacing: 2.5px;
opacity: 0.7;
`;
export const Text2 = styled.h4 `
color:#333;
margin:5% 0 30% 8px;
letter-spacing: 2px;
opacity: 0.7;

@media ${props => props.theme.breakpoints.md}{
  display: flex;
  margin:0 0 15px 8px;
  // align-items: center;
}

@media ${props => props.theme.breakpoints.sm}{
  display: flex;
	width: 100%;
  margin:0 0 15px 8px;

}
`;
export const LeftSection = styled.div `
width: 100%;
display: flex;
flex-direction: column;
`;

export const Img = styled.img `
  width:100%;
  object-fit: cover;
  overflow: hidden; 
  // position: relative;

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
    background-color: white;
    color:orange;
    transition: all 200ms ease-in;
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
padding: 30px;
margin-bottom: 20px;
background: whitesmoke;
border-radius: 15px;
border: no-border:

`;
export const Form = styled.div `
width:100%;
color: rgba(255, 255, 255, 0.5);
background-color: #0F1624;
border: 1px rgb(85, 152, 184) solid;
border-radius: 10px;
font-size: larger;
display: block;
margin:0;
padding: 20px 40px;
.
`;

export const Label = styled.label `
color:rgba(255, 255, 255, 0.5);
`