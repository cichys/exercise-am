import React from 'react';
import { shallow } from 'enzyme';

import Table from '../components/Table';
import response from './mock/userSearchResponse';


const columns = [
    {
        key: 'text',
        label: 'Tweet',
    }
];

describe('Table component', () => {

    it('renders without crashing', () => {
        shallow(<Table />);
    });

    it('renders table data', () => {
        const wrapper = shallow(<Table data={response} columns={columns} />)
        expect(wrapper.find('table').length).toEqual(1);
        expect(wrapper.find('table thead tr').length).toEqual(1);
        expect(wrapper.find('table tbody tr').length).toEqual(59);
        expect(wrapper.find('table thead tr th').length).toEqual(1);
    });


    it('renders cell contents', () => {
        const wrapper = shallow(<Table data={response} columns={columns} />)
        expect(wrapper.find('table').length).toEqual(1);
        expect(wrapper.find('table tbody tr').at(0).find('td').at(0).text()).toContain('T-60 seconds until launch');
    });
});
