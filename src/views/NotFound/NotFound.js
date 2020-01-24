import React from 'react';
import { StyledTitle, StyledSection } from './Styles';

/**
 * NotFound
 * @type Component 
 * @description to be rendered in case the path used doesn't exist
 * @returns NotFound Component
 */

const NotFound = () => (
    <StyledSection>
        <StyledTitle>
            Not Found
            <br/>
            Unfortunately, this URL can't be react
        </StyledTitle>
    </StyledSection>
)

export default NotFound