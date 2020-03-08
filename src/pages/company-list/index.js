import React, { useEffect, useState } from 'react';
import useFetch from 'common/hooks/use-fetch';
import * as Api from 'api/companies';
import Header from 'components/header';
import CompanyTable from 'components/company-table';
import Loading from 'components/loading';
import EditCompanyModal from 'components/edit-company-modal';
import Alert from 'components/alert';

import './styles.css';

function CompanyList() {
  const companiesData = useFetch(Api.getCompanies);
  const editCompanyBudget = useFetch(Api.editCompany);

  const [showModal, setShowModal] = useState(false);
  const [companyToEdit, setCompanyToEdit] = useState({});

  const handleRowClick = company => {
    setCompanyToEdit(company);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleSubmitModal = async params => {
    try {
      await editCompanyBudget.actions.fetch(params);
      handleCloseModal();
      await companiesData.actions.fetch();
    } catch (error) {
      console.error(error);
    }
  };

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
          <>
            <CompanyTable
              data={companiesData.state.data}
              onRowClick={handleRowClick}
            />
            <EditCompanyModal
              show={showModal}
              company={companyToEdit}
              onClose={handleCloseModal}
              onSubmit={handleSubmitModal}
            />

            <Alert
              show={
                !editCompanyBudget.state.error && editCompanyBudget.state.fetched
              }
              message="Budget successfully edited"
              type="success"
            />
            <Alert
              show={!!editCompanyBudget.state.error}
              message="Error when trying to edit budget"
              type="error"
            />
          </>
        )}
        {companiesData.state.error && <p>Error loading data</p>}
      </main>
    </div>
  );
}

export default CompanyList;
