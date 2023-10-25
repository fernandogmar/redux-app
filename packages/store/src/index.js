import { createStore } from 'redux';
import { dialogStateReducer } from 'dialog/state.reducer.js';
import { menuStateReducer } from 'menu/state.reducer.js';
import { reduxPluginCreatorStateReducer } from 'redux-plugin-creator/state.reducer.js';
import './configuration.js';

const store = createStore(reduxPluginCreatorStateReducer);

export {
    store as default
};
