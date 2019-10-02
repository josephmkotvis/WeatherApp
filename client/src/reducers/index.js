import { combineReducers } from 'redux';
import alert from './alert';
import location from './location';
import weather from './weather';
import creation from './creation';


export default combineReducers({
    alert,
    location,
    weather,
    creation
});