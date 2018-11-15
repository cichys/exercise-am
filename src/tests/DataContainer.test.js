import React from 'react';
import { shallow } from 'enzyme';

import DataContainer from '../containers/DataContainer';
import response from './mock/userSearchResponse';


describe('Data Container component', () => {

    it('renders without crashing', () => {
        shallow(<DataContainer />);
    });

    it('set pagination items', () => {
        const wrapper = shallow(<DataContainer data={[]} />);
        wrapper.setProps({ data: response });
        expect(wrapper.instance().currentPage).toEqual(1);
        expect(wrapper.state().paginatedData.length).toEqual(10);
        expect(wrapper.state().paginatedData[0].text).toContain('T-60 seconds until');
    });

    it('set new page', () => {
        const wrapper = shallow(<DataContainer data={[]} />);
        wrapper.setProps({ data: response });
        wrapper.instance().changePage(2);
        expect(wrapper.instance().currentPage).toEqual(2);
        expect(wrapper.state().paginatedData.length).toEqual(10);
        expect(wrapper.state().paginatedData[0].text).toContain('Congratulations @SpaceX team!');
    });

});
