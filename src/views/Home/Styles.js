import styled from 'styled-components';

export const StyledMain = styled.main`
    display: flex;
    justify-content: space-between;
    padding: 25px;

    @media (max-width: 900px) {
        flex-direction: column
    }
`;

export const StyledAside = styled.aside`
    flex-basis: 40%;

    @media (max-width: 900px) {
        margin-bottom: 50px;
    }
`;

export const StyledTitle = styled.h3`
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
`;

export const StyledParagraph = styled.p`
    font-size: 16px;
    font-weight: 300;
    color: #777;
`;

export const StyledContent = styled.div`
    flex-basis: 50%;
`;
