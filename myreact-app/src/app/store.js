import { combineReducers, createStore,applyMiddleware  } from 'redux'

import {counterReducer} from '../features/counter/counterreducer'

const rootReducer = combineReducers({
    counter:counterReducer
})
export default createStore(rootReducer,applyMiddleware())