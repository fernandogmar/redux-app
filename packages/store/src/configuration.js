import DIALOG from 'dialog/register.js';
import MENU from 'menu/register.js';
import {
    //MANY_GROUPS_TO_MANY_PLUGINS,
    //MANY_GROUPS_TO_ONE_PLUGIN,
    ONE_GROUP_TO_ONE_PLUGIN,
    ONE_GROUP_TO_MANY_PLUGINS,
    configureDefaultPluginRelationship,
    configurePlugin
} from 'redux-plugin-creator';

configureDefaultPluginRelationship(ONE_GROUP_TO_ONE_PLUGIN);
configurePlugin(DIALOG, ONE_GROUP_TO_MANY_PLUGINS);
configurePlugin(MENU, ONE_GROUP_TO_MANY_PLUGINS);
