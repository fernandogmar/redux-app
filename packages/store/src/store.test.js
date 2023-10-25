import { dialogOpenAction } from 'dialog/open.action.js';
import { menuOpenAction } from 'menu/open.action.js';
import { reduxPluginCreatorMetaReferenceGroupAction as metaReferenceGroupAction } from 'redux-plugin-creator/meta-reference-group.action.js';
import { reduxPluginCreatorMetaReferenceIdAction as metaReferenceIdAction } from 'redux-plugin-creator/meta-reference-id.action.js';
import { clearPlugins } from 'redux-plugin-creator';
import store from './index.js';

store.dispatch(dialogOpenAction());
store.dispatch(metaReferenceIdAction('team_manager', dialogOpenAction()));
store.dispatch(metaReferenceIdAction('team_manager_filters', menuOpenAction()));
store.dispatch(metaReferenceGroupAction('left', metaReferenceIdAction('team_manager_filters_2', menuOpenAction())));
console.log(JSON.stringify(store.getState(), null, 2));
clearPlugins();
