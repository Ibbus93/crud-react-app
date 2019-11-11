import {createStore, applyMiddleware, compose} from "redux";
import thunkMiddleware from 'redux-thunk';

import combinedReducers from "./combinedReducers";

/*
 * Redux middle-wares array
 */
const middlewares = [thunkMiddleware];

/*
 * The enhancers method
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/*
 * The applied enhancers
 */
const enhancers = composeEnhancers(applyMiddleware(...middlewares));

const initialState = {};

const store = createStore(combinedReducers, initialState, enhancers);

export default store;
