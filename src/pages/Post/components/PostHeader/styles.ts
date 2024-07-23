import styled from "styled-components";

import {mixins} from "../../../../styles/mixins.ts";

export const PostHeaderContainer = styled.div`
    width: 864px;
    height: 168px;
    
    padding: 2rem;

    margin: -5rem auto;
    
    background-color: ${props => props.theme["base-profile"]};

    border: none;
    border-radius: 10px;
`

export const PostHeaderLinks = styled.div`
    display: flex;
    justify-content: space-between;
    
    > a {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        ${mixins.fonts.link};

        color: ${props => props.theme["blue"]};
        
        text-decoration: none;
        
        &:hover {
            text-decoration: underline;
            text-underline-offset: 0.25rem;
        }
    }
`

export const PostHeaderContent = styled.div`
    margin-top: 1.25rem;
    
    > h3 {
        ${mixins.fonts.titleL};

        color: ${props => props.theme["base-title"]};
    }

    > div {
        display: flex;
        gap: 2rem;
        
        margin-top: 0.5rem;
    }
`

export const InfoTag = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    ${mixins.fonts.textM};
    
    color: ${props => props.theme["base-span"]};
    
    > svg {
        color: ${props => props.theme["base-label"]};
    }
`
