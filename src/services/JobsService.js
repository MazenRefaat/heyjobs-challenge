import axios from '../helpers/axios';
import { API_ROOT, JOBS } from '../constants';

/**
 * 
 * Note: I created some dummy data in Firebase Database to fetch
 */


/**
 * JobsListService
 * @type service
 * @returns fetch all available jobs at given endpoint 
 */

export async function JobsListService() {
    return await axios({
        url: `${API_ROOT}${JOBS.URL}.json`,
        method: 'GET'
    })
}


/**
 * JobsDetailsService
 * @type service
 * @returns fetch all details of job with given id 
 * @param {string} id id of the job to be fetched 
 */
export async function JobsDetailsService(id) {
    return await axios({
        url: `${API_ROOT}${JOBS.URL}/${id}.json`,
        method: 'GET'
    })
}