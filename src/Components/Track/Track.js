import React from 'react';


export class Track extends React.Component {
    addTrack() {
        this.props.onAdd(this.props.track)
    }

    removeTrack() {
        this.props.onRemove(this.props.track);
    }

    renderAction() {
        if (isRemoval) {
            return (<button className="Track-action" onClick={this.removeTrack}>-</button>)
        } 
        return <button className="Track-action" onClick={this.addTrack}>+</button>
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                <button className="Track-action">{this.renderAction()}</button>
            </div> 
        )
    }
    
}