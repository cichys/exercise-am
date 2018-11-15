import React, { Component } from 'react';

import Search from './Search';
import Table from './Table';
import Utils from '../services/utils';


class HashtagSearch extends Component {

    dataToDisplay = [
        {
            key: 'text',
            label: 'Tweet',
            format: val => val.length > 50 ? `${val.substring(0, 50)}...`: val
        },
        {
            key: 'likes',
            label: 'Likes',
            format: val => Utils.displayNumberOfItems(val)
        },
        {
            key: 'replies',
            label: 'Replies',
            format: val => Utils.displayNumberOfItems(val)
        },
        {
            key: 'retweets',
            label: 'Retweets',
            format: val => Utils.displayNumberOfItems(val)
        },
        {
            key: 'hashtags',
            label: 'Hashtags',
            format: val => Utils.displayHashtags(val)
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
