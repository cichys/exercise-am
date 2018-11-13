import React, { Component } from 'react';

import Search from './Search';


class HashtagSearch extends Component {

    handleSearch = (e) => {
        this.props.handleSearch(e);
    }


    render() {
        return (
            <div>
                <Search handleSearch={this.handleSearch} />
            </div>
        );
    }
}

export default HashtagSearch;