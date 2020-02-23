import React, { Component } from 'react';
class App extends Component {
  state = {
    msg: "",
    date: "",
    list: [],
    days: {
      Monday: [],
      Tuesday: [],
      Wednesday: [],
      Thrusday: [],
      Friday: [],
      Saturday: [],
      Sunday: []
    },
    selectedOption: "All"
  }
  handleChangeVal = (val) => {
    let msg = { ...this.state.msg }
    msg = val
    this.setState({ msg })
  }
  handleChangeDate = (dates) => {
    let date = { ...this.state.date }
    date = dates
    this.setState({ date })
  }
  handleAdd = async () => {
    let list = [...this.state.list];
    list.push({ msg: this.state.msg, date: this.state.date })
    let msg = { ...this.state.msg }
    let date = { ...this.state.date }
    let days = { ...this.state.days }
    let getdate = new Date(this.state.date)
    let getday = getdate.getDay();
    switch (getday) {
      case 1:
        days.Monday.push({ msg: this.state.msg, date: this.state.date })
        await this.setState({ days });
        break;
      case 2:
        days.Tuesday.push({ msg: this.state.msg, date: this.state.date })
        await this.setState({ days });
        break;
      case 3:
        days.Wednesday.push({ msg: this.state.msg, date: this.state.date })
        await this.setState({ days });
        break;
      case 4:
        days.Thrusday.push({ msg: this.state.msg, date: this.state.date })
        await this.setState({ days });
        break;
      case 5:
        days.Friday.push({ msg: this.state.msg, date: this.state.date })
        await this.setState({ days });
        break;
      case 6:
        days.Saturday.push({ msg: this.state.msg, date: this.state.date })
        await this.setState({ days });
        break;
      case 0:
        days.Sunday.push({ msg: this.state.msg, date: this.state.date })
        await this.setState({ days });
        break;
      default:
        break
    }
    msg = "";
    date = ""
    this.setState({ list, msg, date });
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };
  render() {
    return (
      <div className="App container" >
        <input type="text" className="form-control m-3" value={this.state.msg} placeholder="Write Here!" onChange={(e) => this.handleChangeVal(e.target.value)} />
        <input type="date" className="form-control m-3" value={this.state.date} placeholder="Deadline!" onChange={(e) => this.handleChangeDate(e.target.value)} />
        <button className="btn btn-success mb-5" onClick={this.handleAdd} disabled={(this.state.msg.length === 0 || this.state.date.length === 0) && true}>Add</button>
        <div className="span-con container" style={{ "wordWrap": "break-word" }} >
          {(this.state.msg && <span className="m-5"><h5>{this.state.msg} {this.state.date}</h5></span>) || <h3 className="text-primary">Type Something..!</h3>}
          <select className="form-control" value={this.state.selectedOption} onChange={async (e) => {
            await this.setState({ selectedOption: e.target.value })
          }}>
            <option>All</option>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thrusday</option>
            <option>Friday</option>
            <option>Saturday</option>
            <option>Sunday</option>
          </select>
        </div>
        {this.state.list.length > 0 && <div className="container m-5">
          {this.state.list.length > 0 && <h3>Todo List</h3>}
          {this.state.list.length > 0 && <table className="table table-responsive table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Task</th>
                <th>Deadline</th>
              </tr>
            </thead>
            <tbody>
              {this.state.list.length > 0 && this.state.selectedOption === "All" && this.state.list.map((data, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{data.msg}</td>
                    <td>{data.date}</td>
                  </tr>
                )
              })}
              {this.state.selectedOption === "Monday" && this.state.days.Monday.length > 0 && this.state.days.Monday.map((data, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{data.msg}</td>
                    <td>{data.date}</td>
                  </tr>
                )
              })}
              {this.state.selectedOption === "Tuesday" && this.state.days.Tuesday.map((data, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{data.msg}</td>
                    <td>{data.date}</td>
                  </tr>
                )
              })}
              {this.state.selectedOption === "Wednesday" && this.state.days.Wednesday.map((data, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{data.msg}</td>
                    <td>{data.date}</td>
                  </tr>
                )
              })}
              {this.state.selectedOption === "thursday" && this.state.days.thursday.map((data, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{data.msg}</td>
                    <td>{data.date}</td>
                  </tr>
                )
              })}
              {this.state.selectedOption === "Friday" && this.state.days.Friday.map((data, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{data.msg}</td>
                    <td>{data.date}</td>
                  </tr>
                )
              })}
              {this.state.selectedOption === "Saturday" && this.state.days.Saturday.map((data, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{data.msg}</td>
                    <td>{data.date}</td>
                  </tr>
                )
              })}
              {this.state.selectedOption === "Sunday" && this.state.days.Sunday.map((data, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{data.msg}</td>
                    <td>{data.date}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>}
        </div>}
      </div >
    );
  }
}

export default App;
