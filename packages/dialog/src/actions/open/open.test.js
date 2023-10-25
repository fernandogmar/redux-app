import test from 'tape';
import DIALOG_OPEN, { dialogOpenAction } from 'dialog/open.action.js';

const TEST_NAME = 'dialogOpenActionModule';

test(TEST_NAME, (t) => {

    t.test(`${TEST_NAME}: the default value of this module`, (t) => {
        const actual = DIALOG_OPEN;
        t.equal(typeof actual, 'string', 'should be a string');
        t.notEqual(actual, '', 'should not be empty');
        t.end();
    });

    t.test(`${TEST_NAME}: the action creator 'dialogOpenAction'`, (t) => {
        const created_action = dialogOpenAction();
        const expected_action = {
            type: DIALOG_OPEN
        };

        t.equal(typeof dialogOpenAction, 'function', 'should be a function');
        t.deepEqual(created_action, expected_action, 'should create the expected action');
        t.end();
    });

});
