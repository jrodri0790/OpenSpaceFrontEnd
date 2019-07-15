import React from 'react'
import { BrowserRouter as Router, Route  } from 'react-router-dom'
import OpenSpace from './components/open-space/OpenSpace'
import App from './components/App'
import { SnackbarProvider } from 'notistack';

const Root = () =>
  <SnackbarProvider maxSnack={3} anchorOrigin={{
    vertical: 'top',
    horizontal: 'left',
  }}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/openSpace" component={OpenSpace} />
      </div>
    </Router>
  </SnackbarProvider>

export default Root
