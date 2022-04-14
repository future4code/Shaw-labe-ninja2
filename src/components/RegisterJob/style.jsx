import styled from "styled-components";
import {COLORS} from '../../constants/colorpalette'

export const Main = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.679);
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 5.5px );
    -webkit-backdrop-filter: blur( 13.5px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    position: fixed;
    top:0;
    Button{
        color:${COLORS.fontPrimary};
        font-weight: bold;
        background-color: ${COLORS.primary};
        :hover{
            color:${COLORS.primary};
            background-color: ${COLORS.fontPrimary};
        }
    }
`
export const FormContainer = styled.div`
    display:flex;
    flex-direction:column ;
    gap:10px;
    width: 50%;
    background-color: whitesmoke;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 3px 3px 20px black;
    span{
        text-align: left;
        font-size: 0.85rem;
    }
`


export const ContainerButton = styled.div`
    cursor: pointer;
    display:flex;
    align-items: center;
    justify-content: flex-end;
    gap: 15px;
    
`
export const Input = styled.input`
padding: 10px;
border: none;
outline: none;
font-size: 14px;
border-radius:5px;
background-color: rgba(212, 208, 215, 0.303);
::placeholder{
    color: rgba(72, 71, 74, 0.626);

}
`
export const customStyles = {
    control: (provided, state) => ({
        ...provided,
        backgroundColor:'rgba(212, 208, 215, 0.303);',
      }),
    placeholder:(provided, state) => ({
    ...provided,
    textAlign:'left',
    color: state.isFocused ?  'black' : 'rgba(72, 71, 74, 0.626)'
    }),
    menuList:(provided, state) => ({
        ...provided,
        
        textAlign:'left'
    }),
    menu:(provided, state) => ({
        ...provided,
        backgroundColor:'whitesmoke'
    }),
    multiValue:(provided, state) => ({
        ...provided,
         maxWidth: state.selectProps.width,
         backgroundColor:'black',
        
    }),
    multiValueLabel:(provided, state) => ({
        ...provided,
         width: state.selectProps.width,
         color:'white',
         padding:'5px'
    }),
    indicatorsContainer:(provided,state) => ({
        ...provided,
        width: state.selectProps.width,
    }),
    multiValueRemove:(provided,state) => ({
        ...provided,
        width: state.selectProps.width,
        backgroundColor:'black',
        color:'white',
        padding:'5px'
        
    }),
    option:(provided,state) => ({
        ...provided,
        width: state.selectProps.width,
        backgroundColor: state.isFocused ? '#ffa21f80' : 'transparent',
        color: state.isFocused ? 'white' : 'black',

        
    }),
    
     
  }