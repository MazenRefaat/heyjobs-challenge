import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledCard = styled.div`
    position: relative;
    padding: 15px;
`;

export const StyledTitleWrapper = styled.div`
    display: flex;
    justify-content: space-between
`;

export const StyledTitle = styled.h5`
    color: purple;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const StyledLink = styled(Link)`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transition: background-color 0.3s linear;

    :hover {
        background-color: rgba(230, 230, 230, 0.1);
    }
`;

export const StyledEmployment = styled.p`
    font-size: 14px;
    font-weight: bold;
    color: grey;
`;

export const StyledLocation = styled(StyledEmployment)`
    color: #aaa;
`