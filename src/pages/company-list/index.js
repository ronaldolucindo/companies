import React, { useEffect } from 'react';
import useFetch from 'common/hooks/use-fetch';
import * as Api from 'api/companies';

function CompanyList() {
  const companiesData = useFetch(Api.getCompanies);
    
  useEffect(() => {
    companiesData.actions.fetch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {companiesData.state.data &&
        companiesData.state.fetched &&
        companiesData.state.data.map(item => (
          <div key={item.id}>
            <p>{item.name}</p>
          </div>
        ))}
    </div>
  );
}

export default CompanyList;
