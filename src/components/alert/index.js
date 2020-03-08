import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert({ show, type, message }) {
  const [showAlert, setShowAlert] = useState(false);
  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  useEffect(() => {
    setShowAlert(show);
  }, [show]);

  return (
    <Snackbar
      open={showAlert}
      autoHideDuration={5000}
      onClose={handleCloseAlert}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <MuiAlert
        onClose={handleCloseAlert}
        severity={type}
        variant="filled"
        elevation={4}
      >
        {message}
      </MuiAlert>
    </Snackbar>
  );
}

Alert.propTypes = {
  show: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(['error', 'warning', 'info', 'success']).isRequired,
  message: PropTypes.string.isRequired
};

export default Alert;
