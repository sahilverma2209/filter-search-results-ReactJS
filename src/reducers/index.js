import { combineReducers } from 'redux';
import RepoReducer from './reducer_repo';
import GlobalReducer from './reducer_global';


const rootReducer = combineReducers({
  rlist: RepoReducer,
  glist: GlobalReducer
});

export default rootReducer;
