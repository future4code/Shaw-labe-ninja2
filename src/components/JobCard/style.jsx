import styled from "styled-components";
import {COLORS} from '../../constants/colorpalette'

export const Card = styled.div`
    
    display: flex; 
    flex-direction:column; 
    min-width: 22vw; 
    max-width: 22vw; 

    min-height: 35vh; 
    max-height: 35vh; 

    margin: 2% 1%;
    padding: 1%;

    box-shadow: 0.1rem 0.1rem 0.1rem;

    color: ${COLORS.fontPrimary};
    background-color: ${COLORS.primary};
    
    justify-content: space-evenly; 
    align-items: center;
    
    &:hover {
        box-shadow: 0.2rem 0.2rem 0.2rem;
    }

    h3 
    {
        text-decoration: solid 
    }

    Button{
        width: 50%; 
        padding: 2%;
        background-color: ${COLORS.primary};
        &:hover {
            background-color: ${COLORS.primary}
        }
        opacity: 1;
    }
`