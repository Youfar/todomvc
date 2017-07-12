/**
 * Created by cho.oh on 西暦17/07/11.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Footer from './Footer'

export default class TodoItem extends Component {
    static propTypes = {
        todo: PropTypes.object.isRequired,
        deleteTodo: PropTypes.func.isRequired,
        completeTodo: PropTypes.func.isRequired
    }

    handleSave = (id, text) => {
        if (text.length === 0) {
            this.props.deleteTodo(id)
        }
    }

    renderFooter(completedCount) {
        const { todos } = this.props
        const { filter } = this.state
        const activeCount = todos.length - completedCount

        if (todos.length) {
            return (
                <Footer completedCount={completedCount}
                        activeCount={activeCount}
                        filter={filter}
                        onClearCompleted={this.handleClearCompleted}
                        onShow={this.handleShow} />
            )
        }
    }

    render() {
        const { todo, completeTodo, deleteTodo } = this.props

        let element
            element = (
                <div className="view">
                    <input className="toggle"
                           type="checkbox"
                           checked={todo.completed}
                           onChange={() => completeTodo(todo.id)} />
                    <label onDoubleClick={this.handleDoubleClick}>
                        {todo.text}
                    </label>
                    <button className="destroy"
                            onClick={() => deleteTodo(todo.id)}
                            name="Delete"/>
                </div>
            )

        return (
            <li className={classnames({
                completed: todo.completed,
            })}>
                {element}
            </li>
        )
    }
}
