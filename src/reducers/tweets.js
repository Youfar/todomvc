/**
 * Created by cho.oh on 西暦17/07/11.
 */
import { ADD_TWEET, DELETE_TWEET, FAVORITE_TWEET} from '../constants/ActionTypes'

const initialState = [
    {
        text: 'Use Redux',
        completed: false,
        id: 0
    }
]

export default function tweets(state = initialState, action) {
    switch (action.type) {
        case ADD_TWEET:
            return [
                {
                    id: state.reduce((maxId, tweet) => Math.max(tweet.id, maxId), -1) + 1,
                    completed: false,
                    text: action.text
                },
                ...state
            ]
        case DELETE_TWEET:
            return state.filter(tweet =>
                tweet.id !== action.id
            )

        case FAVORITE_TWEET:
            return state.map(tweet =>
                tweet.id === action.id ?
                    { ...tweet, favorite: !tweet.favorite } :
                    tweet
            )

        default:
            return state
    }
}
