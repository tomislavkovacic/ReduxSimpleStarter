import * as Lodash from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';
const API_KEY = 'AIzaSyCWB50HFNsSO4T6F15aILBAcpwHMXSnX2g';

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('dragonball');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term}, (videos) => {
            this.setState({
                videos,
                selectedVideo: videos[0] 
             });
         });
    }

    render() {

        const videoSearch = Lodash.debounce((term) => { this.videoSearch(term) }, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));

