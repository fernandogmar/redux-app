import test from 'tape';
import MENU_OPEN, { menuOpenAction } from 'menu/open.action.js';

const TEST_NAME = 'menuOpenActionModule';

test(TEST_NAME, (t) => {

    t.test(`${TEST_NAME}: the default value of this module`, (t) => {
        const actual = MENU_OPEN;
        t.equal(typeof actual, 'string', 'should be a string');
        t.notEqual(actual, '', 'should not be empty');
        t.end();
    });

    t.test(`${TEST_NAME}: the action creator 'menuOpenAction'`, (t) => {
        const created_action = menuOpenAction();
        const expected_action = {
            type: MENU_OPEN
        };

        t.equal(typeof menuOpenAction, 'function', 'should be a function');
        t.deepEqual(created_action, expected_action, 'should create the expected action');
        t.end();
    });

});
