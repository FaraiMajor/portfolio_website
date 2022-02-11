import styled from 'styled-components';

export const Img = styled.img `
  width:25%;
 height:40%;
  object-fit: cover;
  overflow: hidden;
  border-radius: 100%;
   position:absolute;
  left:73%;
  top: 8%;
  filter:brightness(100%);
  transform: translateX(-50%);
  transition: bottom 1s, left 1s;
  -webkit-box-shadow: 3px 3px 4px 2px #bcd4e6;
  
`
    // export const images = styled.div `
    // position:absolute;
    // bottom:0;
    // right:100px;
    // width:45%;
    // &hover:{
    //   bottom:40px;
    // }
    // `