import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';
import logo from '../../assets/images/logo_full.png'
import { StyledLogo } from './Styles';
import { Link } from 'react-router-dom';

configure({ adapter: new Adapter() });

/**
 * Header component test suite
 */
describe('<Header />', ()=> {
    it('should render logo element', ()=> {
        const wrapper = shallow(<Header />)
        expect(wrapper.find(StyledLogo).prop('src')).toEqual(logo);
    })
    it('should logo redirect to root route', ()=> {
        const wrapper = shallow(<Header />)
        expect(wrapper.find(Link).prop('to')).toEqual('/');
    })
})