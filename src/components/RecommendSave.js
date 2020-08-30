import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { saveRecommend } from '../actions/actions'

const RecommendSave = (props) => {
    // console.log(props.userId)
    useEffect(() => {
        props.saveRecommend(props.userId)
    }, [])
    return(
        <>
            <Redirect to='/user-form' />
        </>
    )
}

const mapStateToProps = state => {
    return{
        ...state,
        userId: state.userId
    }
}

export default connect(mapStateToProps, { saveRecommend })(RecommendSave)