import styled from "styled-components";
import {COLORS} from '../../constants/colorpalette'

export const HeaderContainer = styled.div`
    height: 15vh;
    width: 100%; 
    background-color: ${COLORS.primary};
    padding: 10px 20px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    img{
        height: 100%;
        cursor: pointer;
    }
`
export const ButtonsContainer = styled.div`
    display:flex;
    align-items:center ;
    gap:20px;
`

export const Button = styled.button`
    cursor: pointer;
    padding: 5px 10px;
    border:2px double ${COLORS.fontPrimary};
    border-radius: 5px;
    outline: none;
    background-color: transparent;
    font-weight: bold;
    font-size: 18px;
    :hover{
        background-color: ${COLORS.fontPrimary};
        color:${COLORS.primary}
    }
`