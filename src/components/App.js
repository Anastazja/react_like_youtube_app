import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube'
import VideoList from './VideoList';

class App extends React.Component {

    state = {videos: []};

    onTextSubmit = async text => {
        const response = await youtube.get('/search', {
            params: {
                q: text
            }
        });

        console.log(response.data.items);
        this.setState({videos: response.data.items});
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit = {this.onTextSubmit}/>
                There is: {this.state.videos.length} results
                <VideoList videos = {this.state.videos}/>
            </div>
        );
    }
}

export default App;