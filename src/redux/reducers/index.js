import { combineReducers } from 'redux';
import musicReducer from './musicReducer';
import playerReducer from './playerReducer';


const rootReducer = combineReducers({
    music: musicReducer,
    player: playerReducer,
});

export default rootReducer;