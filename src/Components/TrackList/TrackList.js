import React from 'react';
import Track from '../Track';
import './TrackList.css';

export class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                {this.props.tracks.map(track => {
                    (
                        <div key={track.id}>
                            <h3>{track.title}</h3>
                            <p>{track.artist} | {track.album}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}