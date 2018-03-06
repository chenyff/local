import React, { Component } from 'react';
import Nav from './user-components/Nav.js';
import Menu from './user-components/Menu.js';
import Table from './user-components/Table.js';
import Pagination from './user-components/Pagination.js';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <hr />
        <div className="container-fluid">
          <Menu />
          <Table />
          <Pagination />
        </div>
        
      </div>
      
    );
  }
}

export default App;
