import DIALOG from 'dialog/register.js';
import MENU from 'menu/register.js';
import {
    //MANY_GROUPS_TO_MANY_PLUGINS,
    //MANY_GROUPS_TO_ONE_PLUGIN,
    ONE_GROUP_TO_ONE_PLUGIN,
    ONE_GROUP_TO_MANY_PLUGINS,
    getPluginNames,
    getLoggerNames,
    //registerPluginAsLogger
} from 'redux-plugin-creator';
import reduxPluginCreatorStateConfigurator, {
    configureDefaultPluginRelationship,
    configureNameMappers,
    configurePluginRelationship
} from 'redux-plugin-creator/state.configurator.js';

const getConfiguration = (initial_state) => reduxPluginCreatorStateConfigurator(initial_state)
    .map(configureDefaultPluginRelationship(ONE_GROUP_TO_ONE_PLUGIN))
    .map(configurePluginRelationship(DIALOG, ONE_GROUP_TO_MANY_PLUGINS))
    .map(configurePluginRelationship(MENU, ONE_GROUP_TO_MANY_PLUGINS))
    .map(configureNameMappers(getLoggerNames(), getPluginNames()))
    .get();


export {
    getConfiguration
};
