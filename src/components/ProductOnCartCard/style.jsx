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

margin: 1px solid black;
border-radius: 15px;
padding: 25px;

display:flex;
align-items: center;
justify-content: space-between;

min-height: 18.5vh;

background-color: ${COLORS.primary};
box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
border-color: black;

&:hover{
    transform: scale(1.02);
}

`