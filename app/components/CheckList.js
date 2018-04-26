import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TaskActionCreators from '../actions/TaskActionCreators';

class CheckList extends Component {
    checkInputKeyPress(evt) {
        if (evt.key === 'Enter') {
            let newTask = { id: Date.now(), name: evt.target.value, done: false });
        TaskActionCreators.addTask(this.props.cardId, newTask);
        evt.target.value = '';
    }
}

render() {
        let tasks = this.props.tasks.map((task, taskIndex) => ( < li key = { task.id }
            className = "checklist__task" >
            <
            input type = "checkbox"
            checked = { task.done }
            onChange = {
                this.props.taskCallbacks.modifier.bind(null, this.props.cardId, task.id, taskIndex)
            }
            />        {task.name}{' '}         <
            a href = "#"
            className = "checklist__task--remove"
            onClick = {
                this.props.taskCallbacks.supprimer.bind(null, this.props.cardId, task.id, taskIndex)
            }
            / > < /li > ));

        return ( < div className = "checklist" > < ul > { tasks } < /ul>        <input type="text"               className="checklist--add-task"               placeholder="Type then hit Enter to add a task"               onKeyPress={this.checkInputKeyPress.bind(this)}  / > < /div>    )  } }
                CheckList.propTypes = {
                    cardId: PropTypes.number,
                    taskCallbacks: PropTypes.object,
                    tasks: PropTypes.array
                };
                export default CheckList;