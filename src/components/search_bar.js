import React, { Component } from 'react';
// importing React because it does React.createElement
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term : '',
        };
        
    };

    render() {
        return (
            <div className="search-bar">
                <input
                    value ={this.state.term} onChange = {event => this.setState({term: event.target.value,})} />
                <button onClick={() => this.props.onSearchTermChange(this.state.term)} className="btn btn-primary">Submit</button>    
            </div>
        );
    }
};

export default SearchBar;