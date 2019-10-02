import { combineReducers } from 'redux';
import alert from './alert';
import location from './location';
import weather from './weather';
import forecast from './forecast';


export default combineReducers({
    alert,
    location,
    weather,
    forecast
});