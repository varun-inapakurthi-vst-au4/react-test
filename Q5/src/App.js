import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import List from './component/list';
let mapStateToProps = (state) => {
  return {
    name: state
  }
}

class App extends Component {
  // componentDidMount() {
  //   fetch(`https://jsonplaceholder.typicode.com/todos`)
  //     .then(res => res.json())
  //     .then(json => this.props.dispatch({ type: "GET_TODOS", payload: json }));
  // }
  render() {
    return (
      <div className="App container">

        <h1 className="text-primary">{this.props.name.data.name}</h1>
        <input value={this.props.name.searchTerm} type="text" className="form-control" onChange={(e) => this.props.dispatch({
          type: "CHANGE_NAME",
          payload: e.target.value
        })} />
        <input value={this.props.name.date} type="date" className="form-control" onChange={(e) => this.props.dispatch({
          type: "CHANGE_DATE",
          payload: e.target.value
        })} />
        <button className="btn btn-success" onClick={() => this.props.dispatch({
          type: "ADD_TODO"
        })} disabled={this.props.name.searchTerm.length === 0 && "disabled"}>Add</button>
        <div>
          <List />
        </div>

      </div>
    )
  };
}

export default connect(mapStateToProps)(App);
