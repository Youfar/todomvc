/**
 * Created by cho.oh on 西暦17/07/11.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
import Footer from './Footer'
import { SHOW_ALL, SHOW_COMPLETED} from '../constants/TodoFilters'

const TODO_FILTERS = {
    [SHOW_ALL]: () => true,
    [SHOW_COMPLETED]: todo => todo.completed
}

export default class MainSection extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        actions: PropTypes.object.isRequired
    }

    state = { filter: SHOW_ALL }

    handleShow = filter => {
        this.setState({ filter })
    }

    renderFooter() {
        const { todos } = this.props
        const { filter } = this.state

        if (todos.length) {
            return (
                <Footer
                        filter={filter}
                        onShow={this.handleShow} />
            )
        }
    }

    render() {
        const { todos, actions } = this.props
        const { filter } = this.state

        const filteredTodos = todos.filter(TODO_FILTERS[filter])

        return (
            <section className="main">
              <ul className="todo-list">
                {
                    filteredTodos.map(todo =>
                        <TodoItem key={todo.id} todo={todo} {...actions} />
                    )}
              </ul>
                {this.renderFooter()}
            </section>
        )
    }
}