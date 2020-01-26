import React from 'react';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, waitForElement } from '@testing-library/react';
import { Router, Route } from 'react-router-dom';
import JobDetails from './JobDetails';

afterEach(cleanup);

const renderWithRouter = (children, historyConf = {}) => {
  const history = createMemoryHistory(historyConf)
  return render(<Router history={history}>{children}</Router>)
}

/**
 * JobDetails test suite
 */
describe('<App/>', ()=> {
  test('renders JobDetails component', async ()=> {
    const { getAllByText } = renderWithRouter(<Route path='/jobs/:id' component={JobDetails} />, { initialEntries: [
        {
            pathname: '/jobs/0'
        }
    ]})
    const jobTitle = await waitForElement(()=> getAllByText(/iOS Developer/))
    expect(jobTitle[0]).toBeInTheDocument();

  });
})
