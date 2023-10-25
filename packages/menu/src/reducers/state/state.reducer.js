import MENU_CLOSE from 'menu/close.action.js';
import MENU_OPEN from 'menu/open.action.js';
import MENU_TOGGLE from 'menu/toggle.action.js';
import MENU_UNIQUE_OPEN from 'menu/unique-open.action.js';
import { registerReducer } from 'menu/register.js';

const INITIAL_STATE = Object.freeze({
    is_open: false
});

const state = (menu_state = INITIAL_STATE, action = {}) => {
    switch(action.type) {
        case MENU_CLOSE:
            return close(menu_state);
        case MENU_OPEN:
            return open(menu_state);
        case MENU_TOGGLE:
            return toggle(menu_state);
        case MENU_UNIQUE_OPEN:
            return action.carbon_copy ? close(menu_state) : open(menu_state);
        default:
            return menu_state;
    }
};
const { REDUCER_NAME, menuStateReducer } = registerReducer(state);

const close = (menu_state) => (!menu_state.is_open) ? menu_state : { ...menu_state, is_open: false };
const open = (menu_state) => (menu_state.is_open) ? menu_state : { ...menu_state, is_open: true };
const toggle = (menu_state) => ({ ...menu_state, is_open: !menu_state.is_open });

export {
    menuStateReducer,
    INITIAL_STATE as initial_state,
    REDUCER_NAME as default
};
