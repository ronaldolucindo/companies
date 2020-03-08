import React, { useEffect } from 'react';
import useFetch from 'common/hooks/use-fetch';
import * as Api from 'api/companies';
import Header from 'components/header';
import CompanyTable from 'components/company-table';
import Loading from 'components/loading';

import './styles.css';

function CompanyList() {
  const companiesData = useFetch(Api.getCompanies);

  useEffect(() => {
    companiesData.actions.fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="company-list">
      <Header title="Customers Manager" />
      <main className="company-list-main-content">
        <Loading show={companiesData.state.fetching} />

        {companiesData.state.fetched && companiesData.state.data && (
          <CompanyTable data={companiesData.state.data} />
        )}
        {companiesData.state.error && <p>Error loading data</p>}
      </main>
    </div>
  );
}

export default CompanyList;
