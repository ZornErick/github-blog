import styled from "styled-components";
import {mixins} from "../../../../styles/mixins.ts";

export const PostCardContainer = styled.div`
    padding: 2rem;
    
    width: 416px;
    height: 260px;
    
    background-color: ${props => props.theme["base-post"]};

    border: 2px solid transparent;
    border-radius: 10px;

    cursor: pointer;
    
    &:hover {
        border-color: ${props => props.theme["base-label"]};

        transition: border 0.2s;
    }
    
    > header {
        display: flex;
        justify-content: space-between;
        
        > h3 {
            width: 283px;
            
            ${mixins.fonts.titleM};
            
            color: ${props => props.theme["base-title"]};
        }
        
        > span {
            margin-top: 0.35rem;
            
            ${mixins.fonts.textS};

            color: ${props => props.theme["base-span"]};
        }
    }
    
    > p {
        margin-top: 1.25rem;

        ${mixins.fonts.textM};
        
        color: ${props => props.theme["base-text"]};
    }
`
