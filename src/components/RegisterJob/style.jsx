import styled from "styled-components";

export const Main = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.551);
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 5.5px );
    -webkit-backdrop-filter: blur( 13.5px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    position: absolute;
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
    color:#185477;
    font-weight: bold;
    span{
        text-align: left;
        font-size: 0.85rem;
    }
`
export const Button = styled.button`
    padding: 5px;
    border:none;
    outline:none;
    width: 80px;;
    border-radius: 5px;
    color:blueviolet;
    font-weight: bold;
    border:1px solid whitesmoke;
    background-color: #185477;
    :hover{
        color:whitesmoke;
        background-color: #FFA21F;
        border:1px solid whitesmoke;
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
border-radius:5px;
background-color: rgba(212, 208, 215, 0.303);
color: #185477;
::placeholder{
    color: #FFA21F;

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
    color: state.isFocused ?  '#185477' : '#FFA21F'
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
         backgroundColor:'#185477',
        
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
        backgroundColor:'#185477',
        color:'white',
        padding:'5px'
        
    }),
    option:(provided,state) => ({
        ...provided,
        width: state.selectProps.width,
        backgroundColor: state.isFocused ? 'rgba(156, 36, 236, 0.397);' : 'transparent',
        color: state.isFocused ? 'white' : '#185477',

        
    }),
    
     
  }