import styled from "styled-components";
import {COLORS} from '../../constants/colorpalette'
import theme from '../../constants/theme'

export const Card = styled.div`
    
    display: flex; 
    flex-direction:column; 
    min-width: 22vw; 
    max-width: 22vw; 

    min-height: 35vh; 
    max-height: 35vh; 
    margin: 2% 1%;
    padding: 1%;

    color: ${COLORS.fontPrimary};
    font-family: ${theme.typography.fontFamily};
    justify-content: space-evenly; 
    align-items: center;

    

    h3 
    {
        text-decoration: solid ;
        /* margin-bottom:10px; */
        
    }

    Button{
        width: 50%; 
        padding: 2%;
        background-color: ${COLORS.primary};
        color:black;
        margin-top: 5px;
        &:hover {
            background-color: transparent;
            border: 1px solid ${COLORS.primary};
            color:${COLORS.primary};
        }
        opacity: 1;
    }
`
export const Img = styled.img`
    border-radius: 10px;
    height: 14rem;
    width:19rem;
`
export const ImgContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const SelectPay = styled.select`
    background-color: rgba(0,0,0,0.9); 
    border: 1px solid #ffffff7f;
    height: 2em;
    border-radius: 5px;
    margin-left: 3px;
    color: rgba(255,255,255,0.7);
    outline: none;

`
