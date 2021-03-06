import React from 'react';
import ReactDOM from 'react-dom';

import { SecuritySandbox } from './SecuritySandbox';
import { Parent } from './Parent';
import { Sandboxed } from './Sandboxed';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    {process.env.NODE_ENV === 'development' ? <Sandboxed /> : <SecuritySandbox Parent={Parent} Sandboxed={Sandboxed} />}
  </React.StrictMode>,
  document.getElementById('root')
);
