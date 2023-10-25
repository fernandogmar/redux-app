import test from 'tape';
import DIALOG, { dialogStateReducer, initial_state } from 'dialog/state.reducer.js';
import { dialogCloseAction } from 'dialog/close.action.js';
import { dialogOpenAction } from 'dialog/open.action.js';

const TEST_NAME = 'dialogStateReducerModule';

test(TEST_NAME, (t) => {
    const nothing = undefined;

    t.test(`${TEST_NAME}: the default export of this module`, (t) => {
        const actual = DIALOG;
        t.equal(typeof actual, 'string', 'should be a string');
        t.notEqual(actual, '', 'should not be empty');
        t.end();
    });

    t.test(`${TEST_NAME}: the 'dialogState' reducer`, (t) => {
        t.equal(typeof dialogStateReducer, 'function', 'should be a function');
        t.deepEqual(dialogStateReducer(), initial_state, 'should return the initial value when called without arguments');
        t.end();
    });

    t.test(`${TEST_NAME}: for action 'dialogCloseAction' the reducer, when the dialog is not open`, (t) => {
        const action = dialogCloseAction();
        const state = _state({ is_open: false });
        const new_state = dialogStateReducer(state, action);

        t.equal(new_state, state, 'should return a the same state');
        t.end();
    });

    t.test(`${TEST_NAME}: for action 'dialogCloseAction' the reducer, when the dialog is open`, (t) => {
        const action = dialogCloseAction();
        const state = _state({ is_open: true });
        const new_state = dialogStateReducer(state, action);
        const expected_state = _state({ is_open: false });

        t.notEqual(new_state, state, 'should return a different state');
        t.deepEqual(new_state, expected_state, 'should update the selected cards');
        t.end();
    });

    t.test(`${TEST_NAME}: for action 'dialogOpenAction' the reducer, when the dialog is open`, (t) => {
        const action = dialogOpenAction();
        const state = _state({ is_open: true });
        const new_state = dialogStateReducer(state, action);

        t.equal(new_state, state, 'should return a the same state');
        t.end();
    });

    t.test(`${TEST_NAME}: for action 'dialogOpenAction' the reducer, when the dialog is not open`, (t) => {
        const action = dialogOpenAction();
        const state = _state({ is_open: false });
        const new_state = dialogStateReducer(state, action);
        const expected_state = _state({ is_open: true });

        t.notEqual(new_state, state, 'should return a different state');
        t.deepEqual(new_state, expected_state, 'should update the selected cards');
        t.end();
    });

    function _state(values) {
        return {
            ...dialogStateReducer(),
            ...values
        }; // Extend initial state
    }

});
