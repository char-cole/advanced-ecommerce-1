import React, {Component} from 'react';
class Sidebar extends Component {
    state = {};
    render(){
        return (
            <div className="col-md-3">
            <p className="lead">Shop Name</p>
            <div className="list-group">
                <a href="#" className="list-group-item">Category 1</a>
                <a href="#" className="list-group-item">Category 2</a>
                <a href="#" className="list-group-item">Category 3</a>
            </div>
        </div>
        )
    }
}
export default Sidebar