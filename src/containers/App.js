import React from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as TweetActions from '../actions'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = ({tweets, actions}) => (
    <MuiThemeProvider>
        <div>
            <Header addTweet={actions.addTweet}/>
            <MainSection tweets={tweets} actions={actions}/>
        </div>
    </MuiThemeProvider>
)

// const App = ({tweets, actions}) => (
//     <div>
//         <Header addTweet={actions.addTweet} />
//         <MainSection tweets={tweets} actions={actions} />
//     </div>
// )

App.propTypes = {
    tweets: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    tweets: state.tweets
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TweetActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
