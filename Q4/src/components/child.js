import React, { Component } from 'react';
class Child extends Component {
    state = {
        msg: '',
        User: 'User1'
    }
    render() {
        return (
            <div className="container">
                <input type="text" value={this.state.msg} onChange={(e) => {
                    this.props.getMsg(e.target.value)
                    this.setState({ msg: e.target.value })
                }} className="form-control" placeholder="write Here" />

                <select value={this.state.User} onChange={(e) => this.setState({ User: e.target.value })} className="form-control mt-5">
                    {this.props.Users.map((item, i) => {
                        return (
                            <option key={i + item}>{item}</option>
                        )
                    })}

                </select>
                <button className="btn btn-success  mt-3" onClick={() => {
                    this.props.getData(this.state.msg, this.state.User)
                    this.setState({ msg: "" })
                }} disabled={this.state.msg.length === 0 && "disabled"}>Add</button>
            </div>
        );
    }
}

export default Child;