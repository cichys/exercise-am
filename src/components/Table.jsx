import React, { Component } from 'react';

class Table extends Component {

    renderRows = () => {
        return this.props.data.map((el, index) => {
            return (
                <tr key={index}>
                    {this.renderCells(el)}
                </tr>
            );
        });
    }


    renderCells = (row) => {
        return this.props.columns.map((el) => {
            const data = el.format ? el.format(row[el.key]) : row[el.key];
            return <td key={el.key}>{data}</td>
        });
    }


    renderTableHeaders = () => {
        return this.props.columns.map((el) => {
            return <th key={el.key}>{el.label}</th>
        });
    }


    render() {
        if (!this.props.data || this.props.data.length === 0) {
            return null;
        }

        return (
            <table cellPadding="0" cellSpacing="0">
                <thead>
                    <tr>
                        {this.renderTableHeaders()}
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        );
    }
}

export default Table;
