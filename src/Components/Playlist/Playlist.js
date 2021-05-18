import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList';

export class Playlist extends React.Component {
    render () {
        return (
            <div className="Playlist">
                <input defaultValue={"New Playlist"}/>
                <TrackList 
                    tracks={this.props.playlistTracks}
                    onRemove={this.removeTrack}
                    isRemoval={true} />
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}