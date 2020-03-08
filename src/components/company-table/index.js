import React from 'react';
import PropTypes from 'prop-types';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { formatCurrency, formatDate } from 'common/utils';

function CompanyTable({ data }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="companies list">
        <TableHead>
          <TableRow>
            <TableCell>Company Name</TableCell>
            <TableCell align="center">Date of First Purchase</TableCell>
            <TableCell align="right">Total Budget</TableCell>
            <TableCell align="right">Budget Spent</TableCell>
            <TableCell align="right">Budget Left</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(item => (
            <TableRow key={item.id} hover>
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell align="center">
                {formatDate(item.date_of_first_purchase)}
              </TableCell>
              <TableCell align="right">{formatCurrency(item.budget)}</TableCell>
              <TableCell align="right">
                {formatCurrency(item.budget_spent)}
              </TableCell>
              <TableCell align="right">
                {formatCurrency(item.budget - item.budget_spent)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

CompanyTable.defaultProps = {
  data: []
};

CompanyTable.propTypes = {
  data: PropTypes.array.isRequired
};

export default CompanyTable;
