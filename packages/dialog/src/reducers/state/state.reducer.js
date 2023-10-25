import DIALOG_CLOSE from 'dialog/close.action.js';
import DIALOG_OPEN from 'dialog/open.action.js';
import { registerReducer } from 'dialog/register.js';

const INITIAL_STATE = Object.freeze({
    is_open: false
});

const state = (dialog_state = INITIAL_STATE, action = {}) => {
    switch(action.type) {
        case DIALOG_CLOSE:
            return (!dialog_state.is_open) ? dialog_state : { ...dialog_state, is_open: false };
        case DIALOG_OPEN:
            return (dialog_state.is_open) ? dialog_state : { ...dialog_state, is_open: true };
        default:
            return dialog_state;
    }
};
const { REDUCER_NAME, dialogStateReducer } = registerReducer(state);

export {
    dialogStateReducer,
    INITIAL_STATE as initial_state,
    REDUCER_NAME as default
};
