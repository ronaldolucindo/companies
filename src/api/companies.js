import axios from 'axios';

const companies = axios.create({
  baseURL: 'https://5db5c2b7f6869d001474a112.mockapi.io'
});

export function getCompanies() {
  return companies.get('/companies');
}

export function editCompany(params) {
  return companies.put(`/companies/${params.id}`, {...params});
}
