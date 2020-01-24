import React from 'react';
import { 
    StyledMain, 
    StyledAside, 
    StyledParagraph, 
    StyledTitle, 
    StyledContent 
} from './Styles';

/**
 * Home
 * @description view component displayed in root route and responsible for wrapping JobList Component
 * @returns Home component
 */
const Home = () => (
    <StyledMain>
        <StyledAside>
            <StyledTitle>
                Come join us at HeyJobs
            </StyledTitle>
            
            <StyledParagraph>
                We are building the world's leading Predictable Hiring Solution.
            </StyledParagraph>
        </StyledAside>

        <StyledContent>
            <StyledTitle>
                Available Jobs
            </StyledTitle>
        </StyledContent>
    </StyledMain>
)


export default Home;