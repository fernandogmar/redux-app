import { registerSelector } from 'dialog/register.js';

const isOpen = (dialog_state) => Boolean(dialog_state?.is_open);
const { SELECTOR_NAME, dialogIsOpenSelector } = registerSelector(isOpen);

export {
    dialogIsOpenSelector,
    SELECTOR_NAME as default
};
