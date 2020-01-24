import styled from 'styled-components';

export const StyledWrapper = styled.section`
    display: flex;
    padding: 25px;

    @media (min-width: 1024px) {
        justify-content: center;
    }
`;

export const StyledContent = styled.section`
    @media (min-width: 1024px) {
        width: 40%;
    }
`;

export const StyledTitle = styled.h1`
   font-weight: bold;
   font-size: 32px;
`;

export const StyledEmployment = styled.p`
    display: inline-block;
    font-size: 14px;
    font-weight: bold;
    color: #aaa;
`;

export const StyledLocation = styled(StyledEmployment)`
    margin-top: 10px;
`

export const StyledDescription = styled.p`
    font-size: 16px;
    color: #333;
    margin-top: 10px;
`;