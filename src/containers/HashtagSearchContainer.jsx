import React, { Component } from 'react';

import getTwitterData from '../services/twitterService';


class HashtagSearchContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }


    componentDidMount() {
        this.getData();
    }


    getData = () => {
        getTwitterData('hashtagSearch', 'Python').then(response => {
            console.log(response);
        });
    }


    render() {
        return (
            <div>
                hashtag
            </div>
        );
    }
}

export default HashtagSearchContainer;
