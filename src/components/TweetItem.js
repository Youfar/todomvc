/**
 * Created by cho.oh on 西暦17/07/11.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TweetTextInput from './TweetTextInput'

export default class TweetItem extends Component {
    static propTypes = {
        tweet: PropTypes.object.isRequired,
        deleteTweet: PropTypes.func.isRequired,
        favoriteTweet: PropTypes.func.isRequired
    }

    // state = {
    //     editing: false
    // }
    //
    // handleDoubleClick = () => {
    //     this.setState({ editing: true })
    // }

    handleSave = (id, text) => {
        if (text.length === 0) {
            this.props.deleteTweet(id)
        }
        // this.setState({ editing: false })
    }

    render() {
        const {tweet, favoriteTweet, deleteTweet} = this.props

        let element
        // if (this.state.editing) {
        //     element = (
        //         <TweetTextInput text={tweet.text}
        //                         editing={this.state.editing}
        //                         onSave={(text) => this.handleSave(tweet.id, text)}/>
        //     )
        // } else {
            element = (
                <div className="view">
                    <input className="toggle"
                           type="checkbox"
                           checked={tweet.favorite}
                           onChange={() => favoriteTweet(tweet.id)}/>
                    <label onDoubleClick={this.handleDoubleClick}>
                        {tweet.text}
                    </label>
                    <button className="destroy"
                            onClick={() => deleteTweet(tweet.id)}
                            name="Delete"/>
                </div>
            )

            return (
                <li className={classnames({
                    favorite: tweet.favorite,
                })}>
                    {element}
                </li>
            )
        }
}
