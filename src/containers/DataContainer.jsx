import React, { Component } from 'react';

import Search from '../components/Search';
import Table from '../components/Table';
import Pagination from '../components/Pagination';
import Utils from '../services/utils';
import config from '../config/config';


class DataContainer extends Component {

    data = [];
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
            label: 'Date',
            format: val => Utils.parseDate(val)
        }
    ];
    currentPage = 1


    constructor(props) {
        super(props);
        this.state = {
            paginatedData: []
        };
    }


    componentWillReceiveProps(props) {
        if (props.data && props.data.length > 0) {
            this.data = props.data;
            this.setPaginatedData();
        }
    }


    changePage = (page) => {
        this.currentPage = page;
        this.setPaginatedData();
    }


    setPaginatedData = () => {
        const start = (this.currentPage - 1) * config.itemsPerPage;
        const end = this.currentPage * config.itemsPerPage
        this.setState({paginatedData: this.data.slice(start, end)});
    }


    render() {
        return (
            <div>
                <Search onSearch={this.props.onSearch} />
                <Table
                    data={this.state.paginatedData}
                    columns={this.dataToDisplay}
                />
                <Pagination
                    totalItems={this.data.length}
                    itemsPerPage={config.itemsPerPage}
                    currentPage={this.state.currentPage}
                    onChangePage={this.changePage}
                />
            </div>
        );
    }
}

export default DataContainer;
