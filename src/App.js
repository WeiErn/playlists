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
                songs: ['A', 'B', 'C']
            },
            {
                name: 'Workout',
                songs: ['D', 'E', 'F']
            },
            {
                name: 'Slow Jams',
                songs: ['G', 'H', 'I']
            },
            {
                name: 'Focus',
                songs: ['J', 'K', 'L']
            }
        ]
    }
}

class Aggregate extends Component {
    render() {
        return (
            <div style={{width: "40%", display: 'inline-block', color: defaultTextColor}}>
                <h2>{this.props.playlists && this.props.playlists.length} Text</h2>
            </div>
        );
    }
}

class Filter extends Component {
    render() {
        return(
            <div style={defaultStyle}>
                <img/>
                <input type="text"/>
                Filter
            </div>
        );
    }
}

class Playlist extends Component {
    render(){
        return(
            <div style={{...defaultStyle, display: 'inline-block', width: "25%"}}>
                <img />
                <h3>Playlist Name</h3>
                <ul>
                    <li>Song 1</li>
                    <li>Song 2</li>
                    <li>Song 3</li>
                </ul>
            </div>
        );
    }
}

class App extends Component {
    constructor() {
        super();
        this.state = {serverData: {}};
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
              <h1 style={{...defaultStyle, 'font-size': '54px'}}>
                  {this.state.serverData.user.name}'s Playlists
              </h1>
              <Aggregate playlists={this.state.serverData.user.playlists}/>
              <Aggregate/>
              <Filter/>
              <Playlist/>
              <Playlist/>
              <Playlist/>
              <Playlist/>
          </div> : <h1>Loading...</h1>
          }
      </div>
    );
  }
}

export default App;
