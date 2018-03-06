import React, { Component } from 'react';

class Table extends Component {
    render() {
        return (
           <table className="table table-striped table-hover">
               <thead>
                   <tr>
                        <th>序号</th>
                        <th>书名</th>
                        <th>专业</th>
                        <th>价格</th>
                        <th>状态</th>
                   </tr>
               </thead>
               <tbody>

               </tbody>
           </table>

        );
    }
}

export default Table;
