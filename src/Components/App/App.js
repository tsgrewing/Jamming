import Playlist from '../Playlist';
import SearchBar from '../SearchBar';
import SearchResults from '../SearchResults';
import './App.css';

function App() {
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
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track)
    this.setState({playlistTracks: tracks})
  }

  return (
    <div>
      <h1>Ja<span class="highlight">mmm</span>ing</h1>
        <div class="App">
          <SearchBar />
          <div class="App-playlist">
            <SearchResults 
              searchResults={this.state.searchResults} />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
  );
}

export default App;
