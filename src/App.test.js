import React from 'react';
import App from './App';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom/extend-expect';
import { render, wait, cleanup, waitForElement, getByTestId } from '@testing-library/react';
import { Router } from 'react-router-dom';
import NotFound from './views/NotFound/NotFound';

afterEach(cleanup);

const renderWithRouter = (children, historyConf = {}) => {
  const history = createMemoryHistory(historyConf)
  return render(<Router history={history}>{children}</Router>)
}

/**
 * Routes test suite
 */
describe('<App/>', ()=> {
  test('renders lazy Header component ', async ()=> {
    const { getByTitle } = render(<App />);

    const lazyElement = await waitForElement(()=> getByTitle(/HeyJobs/))
    expect(lazyElement).toBeInTheDocument();
  });

  test('renders lazy Home component ', async ()=> {
    const { getByText } = render(<App />);

    const lazyElement = await waitForElement(()=> getByText(/Come join us at HeyJobs/))
    expect(lazyElement).toBeInTheDocument();
  });

  test('renders lazy NotFound component ', async ()=> {
    const { getByText } = renderWithRouter(<NotFound />, { initialEntries: ['/404']})
    expect(getByText(/Not Found/)).toBeInTheDocument();

  });
})
