import React, { Component } from 'react';
import './App.css';
import Child from './components/child';

class App extends Component {
  state = {
    msg: "",
    User: "",
    Users: ["User1", "User2", "User3", "User4", "User5"],
    todo: [],
    UserTodo: {
      User1: [],
      User2: [],
      User3: [],
      User4: [],
      User5: []
    },
    selectedUser: 'All'
  }
  handleData = async (msg, User) => {
    let UserTodo = { ...this.state.UserTodo }
    let todo = [...this.state.todo]
    todo.push({ msg, User })
    await this.setState({ todo, msg: "" });
    switch (User) {
      case 'User1':
        UserTodo.User1.push({ msg, User })
        break;
      case 'User2':
        UserTodo.User2.push({ msg, User })
        break;
      case 'User3':
        UserTodo.User3.push({ msg, User })
        break;
      case 'User4':
        UserTodo.User4.push({ msg, User })
        break;
      case 'User5':
        UserTodo.User5.push({ msg, User })
        break;
      default:
        break;
    }
  }
  render() {
    return (
      <div className="App" >
        <h1 className="text-primary">Todo</h1>
        <Child getData={(msg, User) => this.handleData(msg, User)} getMsg={(msg) => this.setState({ msg })} Users={this.state.Users} />
        <span className="mt-5">{this.state.msg}</span>
        <div className="container">
          <select className="form-control mt-5" value={this.state.selectedUser} onChange={(e) => this.setState({ selectedUser: e.target.value })}>
            <option>All</option>
            {this.state.Users.map((item, i) => {
              return (
                <option key={i + item}>{item}</option>
              )
            })}
          </select>
          <table className="table table-striped mt-3">
            <thead>
              <tr>
                <th>#</th>
                <th>Task</th>
                <th>User</th>
              </tr>
            </thead>
            {this.state.selectedUser === 'All' && <tbody>
              {this.state.todo.length > 0 && this.state.todo.map((todo, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td className={(todo.User === "User1" && "text-primary") || (todo.User === "User2" && "text-warning") || (todo.User === "User3" && "text-danger") || (todo.User === "User4" && "text-success") || "text-black"}>
                      <b> {todo.msg}</b>
                    </td>
                    <td >{todo.User}</td>
                  </tr>
                )
              })}
            </tbody>}
            {this.state.selectedUser === 'User1' && <tbody>
              {this.state.todo.length > 0 && this.state.UserTodo.User1.map((todo, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{todo.msg}</td>
                    <td>{todo.User}</td>
                  </tr>
                )
              })}
            </tbody>}
            {this.state.selectedUser === 'User2' && <tbody>
              {this.state.todo.length > 0 && this.state.UserTodo.User2.map((todo, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{todo.msg}</td>
                    <td>{todo.User}</td>
                  </tr>
                )
              })}
            </tbody>}
            {this.state.selectedUser === 'User3' && <tbody>
              {this.state.todo.length > 0 && this.state.UserTodo.User3.map((todo, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{todo.msg}</td>
                    <td>{todo.User}</td>
                  </tr>
                )
              })}
            </tbody>}
            {this.state.selectedUser === 'User4' && <tbody>
              {this.state.todo.length > 0 && this.state.UserTodo.User4.map((todo, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{todo.msg}</td>
                    <td>{todo.User}</td>
                  </tr>
                )
              })}
            </tbody>}
            {this.state.selectedUser === 'User5' && <tbody>
              {this.state.todo.length > 0 && this.state.UserTodo.User5.map((todo, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{todo.msg}</td>
                    <td>{todo.User}</td>
                  </tr>
                )
              })}
            </tbody>}
          </table>
        </div>
      </div >
    )
  };
}
export default App;
