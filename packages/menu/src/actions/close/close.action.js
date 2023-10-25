import { registerAction } from 'menu/register.js';

const close = () => ({});
const { ACTION_NAME, menuCloseAction } = registerAction(close);

export {
    menuCloseAction,
    ACTION_NAME as default
};
