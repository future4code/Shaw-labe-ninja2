import styled from "styled-components";
import { COLORS } from "../../constants/colorpalette";
import theme from "../../constants/theme";

export const Main = styled.div`

padding: 10px;
min-height: 75vh; 
max-width: 100vw;

text-align: center;
align-items: center;

display: flex;
flex-direction: column;

button {

cursor:pointer;

padding: 10px;
border-radius: 10px;
align-self: flex-end;

font-size: 1.5rem;
font-family: ${theme.typography.fontFamily};

border-color: black;
background-color: ${COLORS.primary};

&:hover{

border-color: black;
background-color: black;
color: ${COLORS.primary};

    }
}

`

