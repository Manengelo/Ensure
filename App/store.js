import {Platform} from 'react-native';
import {createStore,applyMiddleWare,compose} from 'redux';
//import devToolEnhancer from 'remote-redux-devTools';
import thunk from 'redux-thunk';

import reducers from './reducers/root';

const store= createStore(
    reducers,
    compose(
        applyMiddleWare(thunk),
        devToolEnhancer({
            realtime:true,
            name:Platform.OS,
            suppressConnectionErrors:false
        })
    )
);
export default store;