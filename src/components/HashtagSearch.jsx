import React, { Component } from 'react';

import Search from './Search';


class HashtagSearch extends Component {

    renderItems = () => {
        if (!this.props.data || this.props.data.length === 0) {
            return null;
        }
        return this.props.data.map((item, index) => {
            return <div key={index}>{item.likes}</div>
        });
    }


    render() {
        return (
            <div>
                <Search onSearch={this.props.onSearch} />
                {this.renderItems()}
            </div>
        );
    }
}

export default HashtagSearch;