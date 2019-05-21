import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import MainComponent from './components/internal/MainComponent';
import styles from "./assets/styles/js/mainStyle";

class AppComponent extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <AppContainer>
        <BrowserRouter>
          <Provider store={store}>
            <main className={classes.root}>
              <MainComponent />
            </main>
          </Provider>
        </BrowserRouter>
      </AppContainer>
    );
  }
}

export default withStyles(styles)(AppComponent);