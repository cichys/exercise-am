import React, { Component } from 'react';

import getTwitterData from '../services/twitterService';
import DataContainer from './DataContainer';


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
                <h3>Hashtag search</h3>
                <DataContainer 
                    data={this.state.data}
                    onSearch={this.getData}
                />
            </div>
        );
    }
}

export default HashtagSearchContainer;
