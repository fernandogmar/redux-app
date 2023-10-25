import test from 'tape';
import MENU, { menuStateReducer, initial_state } from 'menu/state.reducer.js';
import { menuCloseAction } from 'menu/close.action.js';
import { menuOpenAction } from 'menu/open.action.js';
import { menuToggleAction } from 'menu/toggle.action.js';
import { menuUniqueOpenAction } from 'menu/unique-open.action.js';
import { reduxPluginCreatorMetaCarbonCopyAction as metaCarbonCopyAction } from 'redux-plugin-creator/meta-carbon-copy.action.js';

const TEST_NAME = 'menuStateReducerModule';

test(TEST_NAME, (t) => {
    const nothing = undefined;

    t.test(`${TEST_NAME}: the default export of this module`, (t) => {
        const actual = MENU;
        t.equal(typeof actual, 'string', 'should be a string');
        t.notEqual(actual, '', 'should not be empty');
        t.end();
    });

    t.test(`${TEST_NAME}: the 'menuState' reducer`, (t) => {
        t.equal(typeof menuStateReducer, 'function', 'should be a function');
        t.deepEqual(menuStateReducer(), initial_state, 'should return the initial value when called without arguments');
        t.end();
    });

    t.test(`${TEST_NAME}: for action 'menuCloseAction' the reducer, when the menu is not open`, (t) => {
        const action = menuCloseAction();
        const state = _state({ is_open: false });
        const new_state = menuStateReducer(state, action);

        t.equal(new_state, state, 'should return a the same state');
        t.end();
    });

    t.test(`${TEST_NAME}: for action 'menuCloseAction' the reducer, when the menu is open`, (t) => {
        const action = menuCloseAction();
        const state = _state({ is_open: true });
        const new_state = menuStateReducer(state, action);
        const expected_state = _state({ is_open: false });

        t.notEqual(new_state, state, 'should return a different state');
        t.deepEqual(new_state, expected_state, 'should update the selected cards');
        t.end();
    });

    t.test(`${TEST_NAME}: for action 'menuOpenAction' the reducer, when the menu is open`, (t) => {
        const action = menuOpenAction();
        const state = _state({ is_open: true });
        const new_state = menuStateReducer(state, action);

        t.equal(new_state, state, 'should return a the same state');
        t.end();
    });

    t.test(`${TEST_NAME}: for action 'menuOpenAction' the reducer, when the menu is not open`, (t) => {
        const action = menuOpenAction();
        const state = _state({ is_open: false });
        const new_state = menuStateReducer(state, action);
        const expected_state = _state({ is_open: true });

        t.notEqual(new_state, state, 'should return a different state');
        t.deepEqual(new_state, expected_state, 'should update the selected cards');
        t.end();
    });

    t.test(`${TEST_NAME}: for action 'menuToggleAction' the reducer, when the menu is open`, (t) => {
        const action = menuToggleAction();
        const state = _state({ is_open: true });
        const new_state = menuStateReducer(state, action);
        const expected_state = _state({ is_open: false });

        t.notEqual(new_state, state, 'should return a different state');
        t.deepEqual(new_state, expected_state, 'should update the selected cards');
        t.end();
    });

    t.test(`${TEST_NAME}: for action 'menuToggleAction' the reducer, when the menu is not open`, (t) => {
        const action = menuToggleAction();
        const state = _state({ is_open: false });
        const new_state = menuStateReducer(state, action);
        const expected_state = _state({ is_open: true });

        t.notEqual(new_state, state, 'should return a different state');
        t.deepEqual(new_state, expected_state, 'should update the selected cards');
        t.end();
    });

    // "Unique" actions, in case there are more than one plugin on the store
    t.test(`${TEST_NAME}: for action 'menuUniqueOpenAction' the reducer, when the menu is open`, (t) => {
        const action = menuUniqueOpenAction();
        const state = _state({ is_open: true });
        const new_state = menuStateReducer(state, action);

        t.equal(new_state, state, 'should return a the same state');
        t.end();
    });

    t.test(`${TEST_NAME}: for action 'menuUniqueOpenAction' the reducer, when the menu is not open`, (t) => {
        const action = menuUniqueOpenAction();
        const state = _state({ is_open: false });
        const new_state = menuStateReducer(state, action);
        const expected_state = _state({ is_open: true });

        t.notEqual(new_state, state, 'should return a different state');
        t.deepEqual(new_state, expected_state, 'should update the selected cards');
        t.end();
    });

    t.test(`${TEST_NAME}: for carbony copy action of 'menuUniqueOpenAction' the reducer, when the menu is open`, (t) => {
        const action = metaCarbonCopyAction(menuUniqueOpenAction());
        const state = _state({ is_open: true });
        const new_state = menuStateReducer(state, action);
        const expected_state = _state({ is_open: false });

        t.notEqual(new_state, state, 'should return a different state');
        t.deepEqual(new_state, expected_state, 'should update the selected cards');
        t.end();
    });

    t.test(`${TEST_NAME}: for carbon copy action of 'menuUniqueOpenAction' the reducer, when the menu is not open`, (t) => {
        const action = metaCarbonCopyAction(menuUniqueOpenAction());
        const state = _state({ is_open: false });
        const new_state = menuStateReducer(state, action);

        t.equal(new_state, state, 'should return a the same state');
        t.end();
    });

    function _state(values) {
        return {
            ...menuStateReducer(),
            ...values
        }; // Extend initial state
    }

});
