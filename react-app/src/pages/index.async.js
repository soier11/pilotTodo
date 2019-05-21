import React from 'react';
import Loadable from 'react-loadable';

export const HOME = Loadable({
  loader: () => import('../containers/HomeScreen'),
  loading: () => <div>loading...</div>,
});