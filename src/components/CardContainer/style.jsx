import styled from "styled-components";

export const CardContainerMain = styled.div`
     display: flex; 
    flex-direction: row; 
    flex-wrap: wrap; 
    justify-content: center;
    max-width: 100%; 

    @media(max-width: 600px) {
        display: flex; 
        flex-direction: column; 
        flex-wrap: wrap; 
        align-items: center;
        max-width: 100%; 
        
    }
    

`