import { registerAction } from 'dialog/register.js';

const close = () => ({});
const { ACTION_NAME, dialogCloseAction } = registerAction(close);

export {
    dialogCloseAction,
    ACTION_NAME as default
};
