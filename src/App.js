import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      taskTitle: '',
      taskList: []
    }
    this.onChange = this.onChange.bind(this)
    this.addNewTask = this.addNewTask.bind(this)
    this.completeTask = this.completeTask.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
    
    
  }
  onChange(e) {
    this.setState({
      taskTitle: e.target.value
    })
  }
  addNewTask() {
    this.setState({
      taskList:[...this.state.taskList, this.state.taskTitle],
      taskTitle: ''
    })
  }
  completeTask() {

  }
  deleteTask(task) {
    var newList = this.state.taskList.filter((item) => {
      return item != task
    })
    this.setState({
      taskList: newList
    })
  }
    


  render() {
   console.log(this.state.taskList);
    const todolist = this.state.taskList.map((elem, index) => {
      return <ToDo key={index} list={elem} completeTask={this.completeTask} deleteTask={this.deleteTask} />
    })

    return (
      <div className="App">
        <div>
          <input value={this.state.taskTitle} onChange={this.onChange}></input>
          <button onClick={this.addNewTask}>Add New Task</button>
        </div>
        <div>
          
          {todolist}
        
        </div>

      </div>
    );
  }
}

export default App;
