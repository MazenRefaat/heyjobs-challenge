import axios from '../helpers/axios';
import { API_ROOT, JOBS } from '../constants';
/**
 * JobsListService
 * @type service
 * @returns fetch all available jobs at given endpoint 
 * 
 * ************
 * Note: Here I created some dummy data in Firebase Database to fetch
 */

export async function JobsListService() {
    return await axios({
        url: `${API_ROOT}${JOBS.URL}.json`,
        method: 'GET'
    })
}