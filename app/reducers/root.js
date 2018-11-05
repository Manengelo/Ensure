import { combineReducers} from 'redux';

// Import Reducers
import policies from './policies';

const reducers= combineReducers({
    policies: policies
});
export default reducers;