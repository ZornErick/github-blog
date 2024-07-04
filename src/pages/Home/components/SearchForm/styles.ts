import styled from "styled-components";
import {mixins} from "../../../../styles/mixins.ts";

export const SearchFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    
    width: 864px;
    
    > header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        > h3 {
            ${mixins.fonts.titleS};
            
            color: ${props => props.theme["base-subtitle"]};
        }
        
        > span {
            ${mixins.fonts.textS};
            
            color: ${props => props.theme["base-span"]};
        }
    }
    
    > input {
        flex: 1;
        
        padding: 0.875rem 1rem;

        color: ${props => props.theme["base-text"]};
        background-color: ${props => props.theme["base-input"]};
        
        border: 1px solid ${props => props.theme["base-border"]};
        border-radius: 6px;
        
        &::placeholder {
            color: ${props => props.theme["base-label"]};
        }
    }
`
