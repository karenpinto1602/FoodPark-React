import React, { Component } from 'react';

class DataTable extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj._id}
                </td>
                <td>
                    {this.props.obj.RegNo}
                </td>
                <td>
                    {this.props.obj.Name}
                </td>
            </tr>
        );
    }
}

export default DataTable;