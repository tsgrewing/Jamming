import React from 'react';
import Track from '../Track';
import './TrackList.css';

export class TrackList extends React.Component {

    
    render() {
        return (
            <div className="TrackList">
                {this.props.tracks.map(track => {
                    (
                        <Track 
                            key={track.id}
                            track={track}
                            onRemove={this.props.onRemove}
                            onAdd={this.props.onAdd}
                            onRemove={this.props.onRemove}
                            isRemoval={this.props.isRemoval}
                        />
                    )
                })}
            </div>
        )
    }
}