import React, { useState, useEffect } from 'react';
import { JobsListService } from '../../services/JobsService';
import Card from '../../components/Card/Card';
import { StyledList } from './Styles';

/**
 * JobList 
 * @type Component
 * @description responsible for fetching and listing available jobs 
 * @return List of all available jobs 
 */

const JobList = () => {
    const [availableJobs, setAvailableJobs] = useState([]);

    useEffect(()=>{
        JobsListService().then(res => {
            setAvailableJobs(res.data)
        }).catch(err => {
            console.log('error', err)
        })
    },[])

    return (
        <StyledList>
            {
                availableJobs.map((job, key)=> (
                    <Card key={key} item={job} />
                ))
            }
        </StyledList>
    )
}


export default JobList;