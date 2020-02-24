import React, { Component } from 'react';
import { connect } from 'react-redux';
let mapStateToProps = (state) => {
    return {
        name: state
    }
}
class OnlineList extends Component {
    render() {
        return (<div className="container">
            <h3 className="mt-5">
                Online Todos List
            </h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Task</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.name.todoData.map((item, idx) => {
                        return (
                            <tr key={idx}>
                                <td>{idx + 1}</td>
                                <td>{item.title}</td>
                            </tr>

                        )
                    })}
                </tbody>
            </table>
        </div>);
    }
}

export default connect(mapStateToProps)(OnlineList);
