import React from 'react';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import EditCompanyModal from './index';

afterEach(cleanup);
const companyToEdit = {
  name: 'My Company',
  budget: 10000,
  budget_spent: 2000.9
};

it('renders', () => {
  const { asFragment } = render(
    <EditCompanyModal
      show={true}
      company={companyToEdit}
      onClose={() => null}
      onSubmit={() => null}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
