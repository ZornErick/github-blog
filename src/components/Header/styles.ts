import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    
    height: 296px;
    
    
    background: ${props => props.theme["base-profile"]};
    background: linear-gradient(0deg, rgba(20,88,156,0.2) 0%, rgba(11,27,43,1) 100%);
    
    > img {
        margin-top: -5rem;
    }
`
