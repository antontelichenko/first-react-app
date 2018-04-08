import {combineReducers} from 'redux';

import tracks from './tracks';
import playlists from './playlists.js'
import filterTracks from './filterTracks.js';


export default combineReducers({
	tracks,
	playlists,
	filterTracks
});