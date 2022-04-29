import styled from "styled-components";

export const FilterStyle = styled.div`
min-height: 10vh;
max-width: 100%; 
margin-top: 5%; 
display: flex;
align-items: center;
justify-content: center;

    

input{
    height: 2em;
    padding: 5px;
    outline: none;
    border: none;
    margin-left: 20px;
    border-radius: 5px;
    border: 1px solid black;
    color: black;
}

input::placeholder{
    color: #0000007f; 
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
    border: 1px solid black;
    height: 2em;
    border-radius: 5px;
    margin-left: 3px;
    color: black;
    outline: none;
}
`
