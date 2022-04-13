import styled from "styled-components";
import {COLORS} from '../../constants/colorpalette'
import theme from "../../constants/theme";

export const FooterContainer = styled.div`
    display: flex;
    height: 10vh;
    background-color: ${COLORS.primary}; //mudar depois
    font-family: ${theme.typography.fontFamily};
    font-size: 0.7em;
`

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 10%;
    img{
        height: 80%;
    }
`

export const InformationsContainer = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    height: 100%;
    width: 50%;
    /* background-color: green; //mudar depois */
  
`