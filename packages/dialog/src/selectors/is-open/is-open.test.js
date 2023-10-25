import test from 'tape';
import { dialogIsOpenSelector } from 'dialog/is-open.selector.js';

const TEST_NAME = 'dialogIsOpenSelectorModule';

test(TEST_NAME, (t) => {

    t.test(`${TEST_NAME}: the 'dialogIsOpenSelector' selector`, (t) => {
        t.equal(typeof dialogIsOpenSelector, 'function', 'should be a function');
        t.deepEqual(dialogIsOpenSelector(), false, 'should return false when no state');
        t.deepEqual(dialogIsOpenSelector({}), false, 'should return fase when no value');
        t.deepEqual(dialogIsOpenSelector({ is_open: 'what ever value' }), true, 'should return is_open boolean value');
        t.deepEqual(dialogIsOpenSelector({ is_open: 0 }), false, 'should return is_open boolean value');
        t.end();
    });

});
