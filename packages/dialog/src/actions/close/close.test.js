import test from 'tape';
import DIALOG_CLOSE, { dialogCloseAction } from 'dialog/close.action.js';

const TEST_NAME = 'dialogCloseActionModule';

test(TEST_NAME, (t) => {

    t.test(`${TEST_NAME}: the default value of this module`, (t) => {
        const actual = DIALOG_CLOSE;
        t.equal(typeof actual, 'string', 'should be a string');
        t.notEqual(actual, '', 'should not be empty');
        t.end();
    });

    t.test(`${TEST_NAME}: the action creator 'dialogCloseAction'`, (t) => {
        const created_action = dialogCloseAction();
        const expected_action = {
            type: DIALOG_CLOSE
        };

        t.equal(typeof dialogCloseAction, 'function', 'should be a function');
        t.deepEqual(created_action, expected_action, 'should create the expected action');
        t.end();
    });

});
