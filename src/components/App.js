import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';

class App extends React.Component {

    state = {
        images: []
    };

    onSearchSubmit = async (term) => {
        //making a network request from API based on user's search from SearchBar.js
        const response = await unsplash.get('/search/photos', {
            params: {
                query: term
            }
        });
        this.setState({ images : response.data.results });
    }


    render () {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar transportToApp={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;