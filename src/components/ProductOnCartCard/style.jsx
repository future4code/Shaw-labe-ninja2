import styled from "styled-components";
import { COLORS } from "../../constants/colorpalette";

export const MainCardContainer = styled.div`

margin: 1px solid black;
padding: 10px;

align-items: center;

min-width: 75vw;
max-width: 75vw;
`

export const CardStyle = styled.div`

border-radius: 15px;
padding: 8px;

display:flex;
align-items: center;
justify-content: space-evenly;

min-height: 18.5vh;

box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
border: solid 2px transparent;     
background-image: linear-gradient(white, white), linear-gradient(45deg,${COLORS.primary},rgb(124, 118, 62),black);     
background-origin: border-box;     
background-clip: content-box, border-box;

&:hover{
    transform: scale(1.02);
}

`