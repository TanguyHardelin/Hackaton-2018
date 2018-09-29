import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';


import Main from './Main'

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
