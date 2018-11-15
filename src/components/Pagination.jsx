import React, { Component } from 'react';

class Pagination extends Component {

    renderPageNumbers = () => {
        if (!this.props.totalItems || this.props.totalItems === 0) {
            return null;
        }
        const totalPages = Math.ceil(this.props.totalItems / this.props.itemsPerPage);

        let buttons = [];
        for (let i = 1; i <= totalPages; i++) {
            buttons.push(
                <button key={i} type="button" onClick={() => this.props.onChangePage(i)}>
                    {i}
                </button>
            );
        }
        return buttons.map(o => o);
    }


    render() {
        return (
            <div className="pagination">{this.renderPageNumbers()}</div>
        );
    }
}

export default Pagination;
