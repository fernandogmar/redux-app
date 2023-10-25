import test from 'tape';
import MENU_OPEN, { menuUniqueOpenAction } from 'menu/unique-toggle.action.js';
import { reduxPluginCreatorMetaCarbonCopyRequiredAction as metaCarbonCopyRequiredAction } from 'redux-plugin-creator/meta-carbon-copy-required.action.js';

const TEST_NAME = 'menuUniqueOpenActionModule';

test(TEST_NAME, (t) => {

    t.test(`${TEST_NAME}: the default value of this module`, (t) => {
        const actual = MENU_OPEN;
        t.equal(typeof actual, 'string', 'should be a string');
        t.notEqual(actual, '', 'should not be empty');
        t.end();
    });

    t.test(`${TEST_NAME}: the action creator 'menuUniqueOpenAction'`, (t) => {
        const created_action = menuUniqueOpenAction();
        const expected_action = metaCarbonCopyRequiredAction({
            type: MENU_OPEN
        });

        t.equal(typeof menuUniqueOpenAction, 'function', 'should be a function');
        t.deepEqual(created_action, expected_action, 'should create the expected action');
        t.end();
    });

});
