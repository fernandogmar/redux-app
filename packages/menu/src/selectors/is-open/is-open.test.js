import test from 'tape';
import { menuIsOpenSelector } from 'menu/is-open.selector.js';

const TEST_NAME = 'menuIsOpenSelectorModule';

test(TEST_NAME, (t) => {

    t.test(`${TEST_NAME}: the 'menuIsOpenSelector' selector`, (t) => {
        t.equal(typeof menuIsOpenSelector, 'function', 'should be a function');
        t.deepEqual(menuIsOpenSelector(), false, 'should return false when no state');
        t.deepEqual(menuIsOpenSelector({}), false, 'should return fase when no value');
        t.deepEqual(menuIsOpenSelector({ is_open: 'what ever value' }), true, 'should return is_open boolean value');
        t.deepEqual(menuIsOpenSelector({ is_open: 0 }), false, 'should return is_open boolean value');
        t.end();
    });

});
