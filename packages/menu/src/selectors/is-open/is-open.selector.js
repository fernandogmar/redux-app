import { registerSelector } from 'menu/register.js';

const isOpen = (menu_state) => Boolean(menu_state?.is_open);
const { SELECTOR_NAME, menuIsOpenSelector } = registerSelector(isOpen);

export {
    menuIsOpenSelector,
    SELECTOR_NAME as default
};
