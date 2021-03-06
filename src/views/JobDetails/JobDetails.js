import React, { useState, useEffect } from 'react';
import { JobsDetailsService } from '../../services/JobsService';
import { StyledWrapper, StyledContent, StyledTitle, StyledEmployment, StyledLocation, StyledDescription} from './Styles';

/**
 * JobDetails 
 * @type View Component
 * @description responsible for fetching and listing details of a specific job
 * @return Job Details 
 */

const JobDetails = (props) => {
    const [job, setJob] = useState({});

    useEffect(()=>{
        const {id} = props.match.params;
        
        JobsDetailsService(id).then(res => {
            if(res && res.data){
                setJob(res.data)
            } else {
                props.history.push('/404');
            }
        }).catch(err => {
            console.log('error', err)
        })
    },[props])

    return (
        <StyledWrapper>
            <StyledContent>
                <StyledTitle>
                    {job.title}
                    
                </StyledTitle>
                
                <div>
                    <StyledEmployment>
                        {job.employment_type}
                        {' - '}
                    </StyledEmployment>

                    {' '}

                    <StyledLocation>
                        {job.location}
                    </StyledLocation>
                </div>

                <div>
                    {job.description && job.description.split('_br').map((text, key)=> (
                        <StyledDescription key={key}>
                            {text}
                        </StyledDescription>
                    ))}
                </div>
            </StyledContent>
        </StyledWrapper>
    )
}


export default JobDetails;