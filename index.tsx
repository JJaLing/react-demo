import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import getRoutes from './src/react-router/routs'

const routes = getRoutes();
const history = browserHistory
import store from './src/redux/ucStore'
// import NewLogin from './components/NewLogin';
// import { loginAction } from './src/redux/actions/LoginAction';
import 'antd/dist/antd.css';

import * as ucServerSaga from './src/redux/sagas/uc-server/ucServerSagas'
import sagaServerMiddleware from './src/redux/sagas/SagaMiddleWare'
// import Paper from './components/Paper';

for (let attr in ucServerSaga) {
  sagaServerMiddleware.run(ucServerSaga[attr])
}

declare var require

var React = require('react')

var ReactDOM = require('react-dom')

ReactDOM.render(
  <Provider store={store}>
    <Router history= {history}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('example')
)