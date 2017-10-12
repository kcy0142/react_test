import React, { Component } from 'react';

class Search extends Component {

    constructor(){
        super();
        this.state={
            searchTerm:"React"
        };
    }

    render() {
        return (
            <div>
                Search Item:
                <input type="search" value={this.state.searchTerm} />
            </div>
        );
    }
}

export default Search;