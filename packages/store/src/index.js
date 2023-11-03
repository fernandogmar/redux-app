import { createStore } from 'redux';
import { dialogStateReducer } from 'dialog/state.reducer.js';
import { menuStateReducer } from 'menu/state.reducer.js';
import { reduxPluginCreatorStateReducer, initial_state } from 'redux-plugin-creator/state.reducer.js';
import { getConfiguration } from './configuration.js';

const store = createStore(reduxPluginCreatorStateReducer, getConfiguration(initial_state));

export {
    store as default
};
