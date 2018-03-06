import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-6">
                    <div className="btn-group" >
                        <button type="button" className="btn btn-primary">增加</button>
                        <button type="button" className="btn btn-warning">修改</button>
                        <button type="button" className="btn btn-danger">删除</button>
                    </div>
                </div>
                <div className="col-md-4 col-md-offset-3">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="输入要搜索的内容" />
                            <div class="input-group-append">
                                <span class="input-group-text" id="basic-addon2">@example.com</span>
                            </div>
                    </div>
                </div> 
            </div>
            
        );
    }
}

export default Menu;
