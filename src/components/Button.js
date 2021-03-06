import styled from 'styled-components';

export const ButtonContainer = styled.button`
 text-transform:capitalize;
 font-size:1rem;
 background:transparent;
 border: 0.05rem solid Blue;
 border-color: ${props => ( props.cart ? "yellow":"Blue")};
 color:${prop => prop.cart ? "yellow":"Blue"};
 border-radius:0.5rem;
 padding:0.2rem 0.5rem;
 cursor:pointer;
 margin:0.2rem 0.5rem 0.2rem 0;
 transition: all 0.5s ease-in-out;
 &:hover {
     background:${prop => prop.cart ? "yellow":"Blue"};
     color:lightBlue;
 }
 &:focus {
     outline:none;
 };
`