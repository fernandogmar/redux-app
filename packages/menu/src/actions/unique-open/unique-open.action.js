import { reduxPluginCreatorMetaCarbonCopyRequiredAction as metaCarbonCopyRequiredAction } from 'redux-plugin-creator/meta-carbon-copy-required.action.js';
import { registerAction } from 'menu/register.js';

const uniqueOpen = () => metaCarbonCopyRequiredAction({});
const { ACTION_NAME, menuUniqueOpenAction } = registerAction(uniqueOpen);

export {
    menuUniqueOpenAction,
    ACTION_NAME as default
};
