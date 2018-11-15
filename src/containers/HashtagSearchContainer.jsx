import React, { Component } from 'react';

import getTwitterData from '../services/twitterService';
import HashtagSearch from './HashtagSearch';


class HashtagSearchContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }


    getData = (term) => {
        getTwitterData('hashtagSearch', term).then(response => {
            this.setState({data: response.data});
        });
    }


    render() {
        return (
            <div>
                <HashtagSearch 
                    data={this.state.data}
                    onSearch={this.getData}
                />
            </div>
        );
    }
}

export default HashtagSearchContainer;
