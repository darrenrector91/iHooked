import React, { Component } from "react";
import { Table } from "reactstrap";

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Species</th>
              <th>Length</th>
              <th>Weight</th>
              <th>Location</th>
              <th>Image</th>
            </tr>
          </thead>
        </Table>
      </div>
    );
  }
}

export default DataTable;
