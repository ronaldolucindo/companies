import React from 'react';
import PropTypes from 'prop-types';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.css';

function Loading({ show }) {
  return (
    <Backdrop open={show} className="loading-backdrop">
      <CircularProgress className="loading-content" size={40} />
    </Backdrop>
  );
}

Loading.propTypes = {
  show: PropTypes.bool.isRequired
};

export default Loading;
