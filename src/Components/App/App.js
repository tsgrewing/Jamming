import React from 'react';
import Playlist from '../Playlist';
import SearchBar from '../SearchBar';
import SearchResults from '../SearchResults';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {name: 'Stairway to Heaven'},
        {artist: 'Led Zeppelin'},
        {album: 'Led Zeppelin IV'},
        {id: ''}
      ],
      playlistName: 'Jams',
      playlistTracks: [
        {name: 'Black Dog'},
        {artist: 'Led Zeppelin'},
        {album: 'Led Zeppelin IV'},
        {id: ''}
      ]
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map(playlistTrack => playlistTrack.uri);

  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track)
    this.setState({playlistTracks: tracks})
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    this.setState({playlistTracks: tracks.filter(playlistTrack => playlistTrack.id !== track.id)})
  }

  render() {
    return (
      <div>
        <h1>Ja<span class="highlight">mmm</span>ing</h1>
          <div class="App">
            <SearchBar />
            <div class="App-playlist">
              <SearchResults 
                searchResults={this.state.searchResults}
                onAdd={this.addTrack} />
              <Playlist
                onSave={this.savePlaylist}
                playlistName={this.state.playlistName}
                playlistTracks={this.state.playlistTracks}
                onRemove={this.removeTrack} />
            </div>
          </div>
        </div>
    );
  };
}

export default App;
