import {Platform} from 'react-native';
import {createStore,applyMiddleware,compose} from 'redux';
import devToolEnhancer from 'remote-redux-devtools';
import thunk from 'redux-thunk';

import reducers from './reducers/root';

const store= createStore(
   reducers,
    compose(
      applyMiddleware(thunk),
       devToolEnhancer({
           realtime:true,
           name:Platform.OS,
            suppressConnectionErrors:false
        })
   )
);
export default store;