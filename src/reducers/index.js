/**
 * Created by cho.oh on 西暦17/07/11.
 */
import { combineReducers } from 'redux'
import todos from './todos'

const rootReducer = combineReducers({
    todos
})

export default rootReducer