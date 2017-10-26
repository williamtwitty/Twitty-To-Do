import React, { Component } from 'react';

class ToDo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: props.taskList
        }
        
    }
    componentWillReceiveProps(props) {
        this.setState({
            list: props.taskList
        })
    }
    render() {
        console.log(this.props);
        
        return (
            <div>
                <div>{this.props.list}</div>
                {<button onClick={(e) =>{this.props.completeTask(this.props.list)}}>Complete</button>}
                <button onClick={(e) =>{this.props.deleteTask(this.props.list)}}>X</button>
            </div>
        );
    }
}

export default ToDo;