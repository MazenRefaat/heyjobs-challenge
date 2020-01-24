import React from 'react';
import PropTypes from 'prop-types';
import { StyledCard, StyledTitleWrapper, StyledTitle, StyledLocation, StyledLink, StyledEmployment } from './Styles';

/**
 * Card
 * @type Component 
 * @description component responsible for rendering basic info about Job Post
 * @param {object} props 
 */

const Card = (props) => (
    <StyledCard>
        <StyledLink to={`/jobs/${props.item.id}`}></StyledLink>

        <StyledTitleWrapper>
            <StyledTitle>
                {props.item.title}
            </StyledTitle>

            <StyledLocation>
                {props.item.location}
            </StyledLocation>
        </StyledTitleWrapper>

        <StyledEmployment>
            {props.item.employment_type}
        </StyledEmployment>
    </StyledCard>
)

Card.propTypes = {
    item: PropTypes.object
}


export default Card;