import { registerAction } from 'menu/register.js';

const open = () => ({});
const { ACTION_NAME, menuOpenAction } = registerAction(open);

export {
    menuOpenAction,
    ACTION_NAME as default
};
