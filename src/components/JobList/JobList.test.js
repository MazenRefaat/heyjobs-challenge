import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import JobList from './JobList';

configure({ adapter: new Adapter() });

describe('<JobList/>', ()=> {
    let wrapper = mount(<JobList />);
    const setJobsState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    useStateSpy.mockImplementation((jobsState) => [jobsState, setJobsState]);

    beforeEach(()=> {
        wrapper = mount(<JobList />);
    })

    afterEach(()=> {
        jest.clearAllMocks();
    })

    it('should match snapshot', ()=> {
        expect(wrapper).toMatchSnapshot();
    })

    it('should update availableJobs state on API fetch of jobs', ()=> {
        const fetchResponse = {
            data: 'test'
        }

        global.fetch = jest.fn().mockImplementation(()=> 
            Promise.resolve(mockResponse(200, null, JSON.stringify(fetchResponse)))
        );

        setJobsState(fetchResponse.data)
        expect(setJobsState).toHaveBeenCalledWith(fetchResponse.data);
    })
})