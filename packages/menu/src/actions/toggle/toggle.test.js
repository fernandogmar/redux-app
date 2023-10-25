import test from 'tape';
import MENU_OPEN, { menuToggleAction } from 'menu/toggle.action.js';

const TEST_NAME = 'menuToggleActionModule';

test(TEST_NAME, (t) => {

    t.test(`${TEST_NAME}: the default value of this module`, (t) => {
        const actual = MENU_OPEN;
        t.equal(typeof actual, 'string', 'should be a string');
        t.notEqual(actual, '', 'should not be empty');
        t.end();
    });

    t.test(`${TEST_NAME}: the action creator 'menuToggleAction'`, (t) => {
        const created_action = menuToggleAction();
        const expected_action = {
            type: MENU_OPEN
        };

        t.equal(typeof menuToggleAction, 'function', 'should be a function');
        t.deepEqual(created_action, expected_action, 'should create the expected action');
        t.end();
    });

});
