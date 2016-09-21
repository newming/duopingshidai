import React from 'react';
import {render} from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import Routers from './routes';

render(<Routers />,document.getElementById('root'));
