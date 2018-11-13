import React, { Component } from 'react';

import HashtagSearchContainer from './HashtagSearchContainer';
import UserSearchContainer from './UserSearchContainer';


class PageContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pageToDisplay: 'hashtag'
        };
    }


    changePage = (page) => {
        this.setState({pageToDisplay: page});
    }


    renderPage = () => {
        if (this.state.pageToDisplay === 'hashtag') {
            return <HashtagSearchContainer />;
        } else if (this.state.pageToDisplay === 'user') {
            return <UserSearchContainer />;
        }
    }


    render() {
        return (
            <div>
                <header>
                    <button onClick={() => this.changePage('hashtag')}>Hashtag search</button>
                    <button onClick={() => this.changePage('user')}>User search</button>
                </header>
                <main>
                    {this.renderPage()}
                </main>
            </div>
            
        );
    }
}

export default PageContainer;