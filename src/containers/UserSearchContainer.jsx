import React, { Component } from 'react';

import getTwitterData from '../services/twitterService';
import UserSearch from '../components/UserSearch';


class UserSearchContainer extends Component {

    render() {
        return (
            <div>
                <UserSearch />
            </div>
        );
    }
}

export default UserSearchContainer;