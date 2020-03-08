import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { formatCurrency } from 'common/utils';

import './styles.css';

function EditCompanyModal({ company, show, onSubmit, onClose }) {
  const [budget, setBudget] = useState('');
  const isBudgetValid = budget > company.budget_spent;
  const handleSubmit = async e => {
    e.preventDefault();
    const params = { id: company.id, budget };
    await onSubmit(params);
    onClose();
  };

  useEffect(() => {
    setBudget(company.budget);
  }, [company.budget, show]);

  return (
    <Dialog
      open={show}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      aria-labelledby="company-dialog-title"
      aria-describedby="company-dialog-description"
      className="company-modal"
    >
      <DialogTitle id="company-dialog-title">
        {`Edit ${company.name} budget`}
        <IconButton aria-label="close" onClick={onClose} className="close-btn">
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <form onSubmit={handleSubmit} autoComplete="off">
        <DialogContent>
          <TextField
            autoFocus
            required
            error={!isBudgetValid}
            helperText={`Budget must be greater than budget spent (${formatCurrency(
              company.budget_spent
            )})`}
            margin="dense"
            id="budget"
            name="budget"
            value={budget || ''}
            onChange={e => setBudget(e.target.value)}
            label="Budget"
            type="number"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={!isBudgetValid}
          >
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

EditCompanyModal.defaultProps = {
  company: {
    name: '',
    budget: 0
  }
};

EditCompanyModal.propTypes = {
  company: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
};

export default EditCompanyModal;
