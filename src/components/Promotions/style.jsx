import styled from 'styled-components';
import theme from '../../constants/theme'

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40vh;
    margin-top: 5%; 
    font-family: ${theme.typography.fontFamily};
`
export const PromotionsBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    border-radius: 2vw;
`

export const FieldSet = styled.fieldset`
  border: 1px solid #8a8989 !important;
  padding: 0 1.4em 1.4em 1.4em !important;
  margin: 0 0 1.5em 0 !important;
  width: 80%;
  border-radius: 1em;
`

export const Legend = styled.legend`
  display: flex;
  font-size: 1.8em !important;
  text-align: center !important;
  width: auto;
  padding: 0 10px;
  border-bottom: none;  justify-content: center;
  align-items: center;
  img{
      margin-left: 4px;
  }
`
