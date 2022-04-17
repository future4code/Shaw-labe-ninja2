import styled from "styled-components";
import {COLORS} from '../../constants/colorpalette'
import theme from '../../constants/theme'

export const Card = styled.div`
    
    display: flex; 
    flex-direction:column; 
    min-width: 200px; 
    width: 22vw; 

    min-height: 35vh; 
    height: 35vh; 
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

    #disabled-button {
        color: ${COLORS.primary};
        font-size: 1.2rem; 
        font-weight: bolder; 
    }

   
`
export const Img = styled.img`
    border-radius: 10px;
    margin-bottom: 1%; 
    /* height: 14rem;
    width:19rem; */
    height: 25vh;
    min-width: 180px; 
    width: 20vw;

`
export const ImgContainer = styled.div`
    display: flex;
    flex-direction: column; 
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


