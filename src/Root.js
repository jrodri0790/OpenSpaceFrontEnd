import React from 'react'
import { BrowserRouter as Router, Route  } from 'react-router-dom'
import OpenSpace from './components/open-space/OpenSpace'
import Feedback from './components/feedback/Feedback'
import { SnackbarProvider } from 'notistack';

const Root = () =>
  <SnackbarProvider maxSnack={3} anchorOrigin={{
    vertical: 'top',
    horizontal: 'left',
  }}>
    <Router>
      <div>
        <Route exact path="/openSpace" component={OpenSpace} />
        <Route exact path="/" component={Feedback} />
      </div>
    </Router>
  </SnackbarProvider>

export default Root
