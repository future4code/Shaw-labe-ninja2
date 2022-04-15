import styled from "styled-components";

export const FilterStyle = styled.div`
min-height: 10vh;
max-width: 100%; 
background-color: rgba(0,0,0,0.9); 
margin-top: 5%; 
display: flex;
align-items: center;

    

input{
    height: 2em;
    padding: 5px;
    outline: none;
    border: none;
    margin-left: 20px;
    border-radius: 5px;
    border: 1px solid #ffffff7f;
    background-color: rgba(0,0,0,0.9); 
    color: white;
}

input::placeholder{
    color: rgba(255,255,255,0.5); 
}

.numbers{
    width:8em;
}


label{
    color: rgba(255,255,255,0.7); 
    margin-left: 20px;
    margin-right: 5px; 
}

select{
    background-color: rgba(0,0,0,0.9); 
    border: 1px solid #ffffff7f;
    height: 2em;
    border-radius: 5px;
    margin-left: 3px;
    color: rgba(255,255,255,0.7);
    outline: none;
}
`
