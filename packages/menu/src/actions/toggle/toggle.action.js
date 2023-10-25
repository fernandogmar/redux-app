import { registerAction } from 'menu/register.js';

const toggle = () => ({});
const { ACTION_NAME, menuToggleAction } = registerAction(toggle);

export {
    menuToggleAction,
    ACTION_NAME as default
};
