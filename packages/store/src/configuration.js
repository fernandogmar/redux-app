import DIALOG from 'dialog/register.js';
import MENU from 'menu/register.js';
import reduxPluginCreatorStateConfigurator, {
    //MANY_GROUPS_TO_MANY_PLUGINS,
    //MANY_GROUPS_TO_ONE_PLUGIN,
    ONE_GROUP_TO_MANY_PLUGINS,
    ONE_GROUP_TO_ONE_PLUGIN,
    configureDefaultPluginRelationship,
    configurePluginRelationship
} from 'redux-plugin-creator/state.configurator.js';

const getConfiguration = (initial_state) => reduxPluginCreatorStateConfigurator(initial_state)
    .map(configureDefaultPluginRelationship(ONE_GROUP_TO_ONE_PLUGIN))
    .map(configurePluginRelationship(DIALOG, ONE_GROUP_TO_MANY_PLUGINS))
    .map(configurePluginRelationship(MENU, ONE_GROUP_TO_MANY_PLUGINS))
    .get();


export {
    getConfiguration
};
