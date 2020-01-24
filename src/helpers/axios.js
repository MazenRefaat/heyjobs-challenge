import axios from "axios";

/**
 * axios_fetch 
 * @type function
 * @description wrap axios fetch function with some custom properties to be used in services
 * @param {string} url API endpoint used for call
 * @param {string} method method used for API call 
 */
const axios_fetch = async ({url, method}) => {
    let response = await axios({
        url: url,
        method: method
    })

    if(response.statusText === 'OK')
        return response
    else 
        throw response
}

export default axios_fetch;