import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function Header({ title }) {
  return (
    <header>
      <AppBar position="static">
        <Toolbar>
          <Typography component="h1" variant="h6">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
