import { registerAction } from 'dialog/register.js';

const open = () => ({});
const { ACTION_NAME, dialogOpenAction } = registerAction(open);

export {
    dialogOpenAction,
    ACTION_NAME as default
};
