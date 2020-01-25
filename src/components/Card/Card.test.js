import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from './Card';
import { StyledLink, StyledTitle, StyledLocation, StyledEmployment } from './Styles';

configure({ adapter: new Adapter() });

describe('<Card/>', ()=> {
    const props = {
        item: {id: 0, title: 'job title', location: 'job location', employment_type: 'job employment'},
    }
    let wrapper = shallow(<Card {...props} />);

    it('should render link refer to path with id of passed job prop', ()=> {
        expect(wrapper.find(StyledLink).prop('to')).toEqual('/jobs/0');
    })

    it('should render title of passed job prop', ()=> {
        expect(wrapper.find(StyledTitle).text()).toEqual('job title');
    })

    it('should render location of passed job prop', ()=> {
        expect(wrapper.find(StyledLocation).text()).toEqual('job location');
    })
    
    it('should render employment type of passed job prop', ()=> {
        expect(wrapper.find(StyledEmployment).text()).toEqual('job employment');
    })
})
