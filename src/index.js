import React from 'react';
import {render} from 'react-dom';

const root = document.getElementById('root');

render(<div/>, root);

if (module.hot) {
  module.hot.accept();
}
