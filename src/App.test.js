import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter, Route } from 'react-router-dom';
import App from './App';
import Header from './components/Header/Header';
import Home from './views/Home/Home';
import JobDetails from './views/JobDetails/JobDetails';
import NotFound from './views/NotFound/NotFound';

configure({ adapter: new Adapter() });

let pathMap = {};

/**
 * Routes test suite
 */
describe('<App/>', ()=> {
    beforeAll(() => {
      const component = shallow(<App/>);
      pathMap = component.find(Route).reduce((pathMap, route) => {
          const routeProps = route.props();
          pathMap[routeProps.path] = routeProps.component;
          return pathMap;
        }, {});
    })

    it('should show Home view for /jobs route', () => {
      expect(pathMap['/jobs']).toBe(Home);
    })
    it('should show JobDetails view for /jobs/:id route', () => {
      expect(pathMap['/jobs/:id']).toBe(JobDetails);
    })
    it('should show NotFound for /404 route', () => {
      expect(pathMap['/404']).toBe(NotFound);
    })

    it('should show Header component appended in all routes', () => {
      const wrapper = mount(
          <MemoryRouter initialEntries={['/']}>
              <App />
          </MemoryRouter>
      )
      expect(wrapper.find(Header)).toHaveLength(1);
  })
})
