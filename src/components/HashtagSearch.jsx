import React, { Component } from 'react';

import Search from './Search';
import Table from './Table';


class HashtagSearch extends Component {

    dataToDisplay = [
        {
            key: 'text',
            label: 'Tweet'
        },
        {
            key: 'likes',
            label: 'Likes'
        },
        {
            key: 'replies',
            label: 'Replies'
        },
        {
            key: 'retweets',
            label: 'Retweets'
        },
        {
            key: 'hashtags',
            label: 'Hashtags'
        },
        {
            key: 'date',
            label: 'Date'
        }
    ];


    render() {
        return (
            <div>
                <Search onSearch={this.props.onSearch} />
                <Table
                    data={this.props.data}
                    columns={this.dataToDisplay}
                />
            </div>
        );
    }
}

export default HashtagSearch;
