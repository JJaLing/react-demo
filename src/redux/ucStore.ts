import { combineReducers, createStore, applyMiddleware} from 'redux';
import sagaServerMiddleWare from './sagas/SagaMiddleWare'

import reducers  from './reducers'

const middWares = [sagaServerMiddleWare]
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']
let store = createStore(combineReducers({...reducers}),Object.create(null), composeEnhancers(applyMiddleware(...middWares)) ) as any

console.log(store.getState())

export default store