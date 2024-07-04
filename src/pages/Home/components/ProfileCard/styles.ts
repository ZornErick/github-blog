import styled from "styled-components";

import {mixins} from "../../../../styles/mixins.ts";

export const ProfileCardContainer = styled.div`
    display: flex;
    gap: 2rem;
    
    width: 864px;
    height: 212px;

    padding: 2rem;
    
    margin: -5rem auto;
    
    background-color: ${props => props.theme["base-profile"]};
    
    border: none;
    border-radius: 10px;
`

export const ProfileImage = styled.div`
    border: none;
    border-radius: 8px;
`

export const ProfileContent = styled.div`
    > header {
        display: flex;
        justify-content: space-between;
        
        > h3 {
            ${mixins.fonts.titleL};
            
            color: ${props => props.theme["base-title"]};
        }
        
        > a {
            display: flex;
            align-items: center;
            gap: 0.5rem;

            ${mixins.fonts.link};

            color: ${props => props.theme["blue"]};
        }
    }
    
    > p {
        margin-top: 0.5rem;
        
        ${mixins.fonts.textM};
        
        color: ${props => props.theme["base-text"]};
    }
    
    > div {
        display: flex;
        gap: 1.5rem;
        
        margin-top: 1.5rem;
    }
`

export const InfoTag = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    ${mixins.fonts.textM};
    
    color: ${props => props.theme["base-subtitle"]};
    
    > svg {
        color: ${props => props.theme["base-label"]};
    }
`
