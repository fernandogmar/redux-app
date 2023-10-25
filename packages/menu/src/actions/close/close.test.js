import test from 'tape';
import MENU_CLOSE, { menuCloseAction } from 'menu/close.action.js';

const TEST_NAME = 'menuCloseActionModule';

test(TEST_NAME, (t) => {

    t.test(`${TEST_NAME}: the default value of this module`, (t) => {
        const actual = MENU_CLOSE;
        t.equal(typeof actual, 'string', 'should be a string');
        t.notEqual(actual, '', 'should not be empty');
        t.end();
    });

    t.test(`${TEST_NAME}: the action creator 'menuCloseAction'`, (t) => {
        const created_action = menuCloseAction();
        const expected_action = {
            type: MENU_CLOSE
        };

        t.equal(typeof menuCloseAction, 'function', 'should be a function');
        t.deepEqual(created_action, expected_action, 'should create the expected action');
        t.end();
    });

});
