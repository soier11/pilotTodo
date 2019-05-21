import React from 'react';
import { Route } from 'react-router-dom';
import {
  HOME
} from '../../pages/index.async';

class Main extends React.Component {
  render() {
    return (
      <main className={'main-content'}>
        <Route exact path="/" component={HOME} />
      </main>
    )
  }
};

export default Main;