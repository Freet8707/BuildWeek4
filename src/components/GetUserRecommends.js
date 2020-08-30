import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { getRecommends } from '../actions/actions'

const GetUserRecommends = (props) => {
    // console.log(props.userId)
    useEffect(() => {
        props.getRecommends(props.userId)
    }, [])
    return(
        <>
            <Redirect to='/recommend-display' />
        </>
    )
}

const mapStateToProps = state => {
    return{
        ...state,
        userId: state.userId
    }
}

export default connect(mapStateToProps, { getRecommends })(GetUserRecommends)