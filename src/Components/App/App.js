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
      ]
    }
  }
  return (
    <div>
      <h1>Ja<span class="highlight">mmm</span>ing</h1>
        <div class="App">
          <SearchBar />
          <div class="App-playlist">
            <SearchResults 
              searchResults={this.state.searchResults} />
            <Playlist />
          </div>
        </div>
      </div>
  );
}

export default App;
