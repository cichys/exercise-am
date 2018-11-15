import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter'

import UserSearchContainer from '../containers/UserSearchContainer';
import response from './mock/userSearchResponse';

const mock = new MockAdapter(axios, { delayResponse: 0 });


describe('Github Container component', () => {

    beforeEach(() => {
        mock.onGet('https://am-twitter-scrape.herokuapp.com/users/elonmusk?pages_limit=3&wait=0').reply(200, response);
    });


    afterEach(() => {
        mock.reset()
    });


    it('renders without crashing', () => {
        shallow(<UserSearchContainer />);
    });


    it('call api', (done) => {
        let spy = jest.spyOn(axios, "get");
        const wrapper = shallow(<UserSearchContainer />);
        wrapper.instance().getData('elonmusk');
        setTimeout(o => {
            expect(spy).toHaveBeenCalledWith('https://am-twitter-scrape.herokuapp.com/users/elonmusk?pages_limit=3&wait=0');
            done();
        }, 100);
    });

});
