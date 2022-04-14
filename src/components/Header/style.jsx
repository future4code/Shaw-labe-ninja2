import styled from "styled-components";
import {COLORS} from '../../constants/colorpalette'

export const HeaderContainer = styled.div`
    height: 15vh;
    background-color: ${COLORS.primary};
    padding: 10px 20px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    img{
        height: 100%;
        border-radius:50%
    }
`
export const ButtonsContainer = styled.div`
    display:flex;
    align-items:center ;
    gap:20px;
`

export const Button = styled.button`
    cursor: pointer;
    padding: 5px;
    border:2px double ${COLORS.fontPrimary};
    border-radius: 5px;
    outline: none;
    background-color: transparent;
    font-weight: bold;
    :hover{
        background-color: ${COLORS.fontPrimary};
        color:${COLORS.primary}
    }
`