import React, { Component } from 'react';

import getTwitterData from '../services/twitterService';
import HashtagSearch from '../components/HashtagSearch';


class HashtagSearchContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }


    getData = (term) => {
        getTwitterData('hashtagSearch', term).then(response => {
            console.log(response);
        });
    }


    render() {
        return (
            <div>
                <HashtagSearch handleSearch={this.getData} />
            </div>
        );
    }
}

export default HashtagSearchContainer;
