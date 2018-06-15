import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

let defaultTextColor = '#fff';
let defaultStyle = {
    color: defaultTextColor
};

let fakeServerData = {
    user: {
        name: 'Ern',
        playlists: [
            {
                name: 'My favorites',
                songs: [
                    {name: 'A', duration: 1345},
                    {name: 'B', duration: 1236},
                    {name: 'C', duration: 70000}
                    ]
            },
            {
                name: 'Workout',
                songs: [
                    {name: 'A', duration: 1345},
                    {name: 'B', duration: 1236},
                    {name: 'C', duration: 70000}
                ]
            },
            {
                name: 'Slow Jams',
                songs: [
                    {name: 'A', duration: 1345},
                    {name: 'B', duration: 1236},
                    {name: 'C', duration: 70000}
                ]
            },
            {
                name: 'Focus',
                songs: [
                    {name: 'A', duration: 1345},
                    {name: 'B', duration: 1236},
                    {name: 'C', duration: 70000}
                ]
            }
        ]
    }
}

class PlaylistCounter extends Component {
    render() {
        return (
            <div style={{width: "40%", display: 'inline-block', color: defaultTextColor}}>
                <h2>{this.props.playlists.length} playlists</h2>
            </div>
        );
    }
}

class HoursCounter extends Component {
    render() {
        let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
            return songs.concat(eachPlaylist.songs)
        }, []);
        let totalDuration = allSongs.reduce((sum, eachSong) => {
            return sum + eachSong.duration
        }, 0);
        return (
            <div style={{width: "40%", display: 'inline-block', color: defaultTextColor}}>
                <h2>{Math.round(totalDuration/60)} hours</h2>
            </div>
        );
    }
}

class Filter extends Component {
    render() {
        return(
            <div style={defaultStyle}>
                <img/>
                <input type="text" onChange={event =>
                    this.props.onTextChange(event.target.value)}/>
            </div>
        );
    }
}

class Playlist extends Component {
    render(){
        let playlist = this.props.playlist;
        return(
            <div style={{...defaultStyle, display: 'inline-block', width: "25%"}}>
                <img />
                <h3>{playlist.name}</h3>
                <ul>
                    {playlist.songs.map(song =>
                        <li>{song.name}</li>
                    )}
                </ul>
            </div>
        );
    }
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            serverData: {},
            filterString: ''
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({serverData: fakeServerData});
        }, 1000);
    }
  render() {

    return (
      <div className="App">
          {this.state.serverData.user ?
          <div>
              <h1 style={{...defaultStyle, fontSize: '54px'}}>
                  {this.state.serverData.user.name}'s Playlists
              </h1>
              <PlaylistCounter playlists={this.state.serverData.user.playlists}/>
              <HoursCounter playlists={this.state.serverData.user.playlists}/>
              <Filter onTextChange={text => this.setState({filterString: text})}/>
              {this.state.serverData.user.playlists.filter(playlist =>
                playlist.name.toLowerCase().includes(
                    this.state.filterString.toLowerCase())
              ).map(playlist =>
                  <Playlist playlist={playlist}/>
              )}
          </div> : <h1 style={defaultStyle}>Loading...</h1>
          }
      </div>
    );
  }
}

export default App;
