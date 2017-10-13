import {combineReducers} from 'redux';

import tracks from './tracks';
import playlists from './playlists';
import filterTracks from './findFilterTracks';

export default combineReducers({
    tracks,
    playlists,
    filterTracks
});