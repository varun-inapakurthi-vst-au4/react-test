import React, { Component } from 'react';
import { connect } from 'react-redux';
let mapStateToProps = (state) => {
    return {
        name: state
    }
}
class List extends Component {
    render() {
        return (<div>
            <select className="form-control" value={this.props.name.selectedOption} onChange={(e) => this.props.dispatch({
                type: "SELECTED_OPTION",
                payload: e.target.value
            })}>
                <option >All</option>
                <option >Today</option>
                <option >Previous</option>
                <option >Next</option>
            </select>
            {this.props.name.todo.length > 0 && <table className="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Task</th>
                        <th>Deadline</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.name.selectedOption === "All" && this.props.name.todo.map((item, idx) => {
                        return (
                            <tr key={idx}>
                                <td>{idx + 1}</td>
                                <td>{item.task}</td>
                                <td>{item.date}</td>
                            </tr>
                        )
                    })}
                    {this.props.name.selectedOption === "Next" && this.props.name.next.map((item, idx) => {
                        return (
                            <tr key={idx}>
                                <td>{idx + 1}</td>
                                <td>{item.task}</td>
                                <td>{item.date}</td>
                            </tr>
                        )
                    })}
                    {this.props.name.selectedOption === "Previous" && this.props.name.previous.map((item, idx) => {
                        return (
                            <tr key={idx}>
                                <td>{idx + 1}</td>
                                <td>{item.task}</td>
                                <td>{item.date}</td>
                            </tr>
                        )
                    })}
                    {this.props.name.selectedOption === "Today" && this.props.name.today.map((item, idx) => {
                        return (
                            <tr key={idx}>
                                <td>{idx + 1}</td>
                                <td>{item.task}</td>
                                <td>{item.date}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>}
        </div>);
    }
}

export default connect(mapStateToProps)(List);