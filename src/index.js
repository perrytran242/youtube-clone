import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'; 
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBnXJphVdO3cl-Eyr_8I-yQukxiHU_9y1g';

// Create a new component. This component should produce some HTML.


class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null,
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (response) => {
            this.setState({ 
                videos: response, 
                selectedVideo: response[0]
            });
        });
    }

    render() {
        const { videos, selectedVideo } = this.state; 

        return (
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
                <VideoDetail videos={selectedVideo}/>
                <VideoList 
                    onVideoSelect={ (selectedVideo) => this.setState({ selectedVideo }) }
                    videos={videos}/>
            </div>
        );
    }
}

// Take this component's generated HTML and put it on the page. ( in the DOM)

ReactDOM.render(
    <App />, 
    document.querySelector('.container')
); 