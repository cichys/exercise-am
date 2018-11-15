import React, { Component } from 'react';


class Search extends Component {

    handleSearch = (e) => {
        e.preventDefault();
        this.props.onSearch(this.textInput.value);
    }


    render() {
        return (
            <div className="search">
                <input type="text" ref={(input) => this.textInput = input} placeholder="Search..." />
                <button type="button" onClick={this.handleSearch}>Search</button>
            </div>
        );
    }
}

export default Search;