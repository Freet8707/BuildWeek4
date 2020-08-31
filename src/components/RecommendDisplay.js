import React, { useState, useEffect } from 'react'
// import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteRecommend } from '../actions/actions'
import styled from 'styled-components'

const Recommendations = styled.div`
    width: 800px;
    margin: 0 auto;
    padding: 40px 0 40px 30px;
    border-radius: 10px;
    background: #6ed36e;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    div {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        span {
            color: rgb(0, 100, 0);
            font-weight: 800;
        }
    }
`;

const RecommendDisplay = (props) => {
    console.log(props.recommendSuccess)
    const [data, setData] = useState([])
    // const { push } = useHistory()
    
    useEffect(() => {
        if(props.recommendSuccess.length > 0){
            return setData(props.recommendSuccess)
        }
        return setData([])
    }, [props.recommendSuccess])
    
    // const { description, effect, flavor, rating, strain, type } = props.recommendSuccess[0]
    return (
        <Recommendations>
            {props.recommendRetrieve ? <p style={{color: 'red'}}>Retrieving Recommendations...</p> : null}
            {data.length > 0 ? 
            <div>
                <h1>Your List of Recommendations : {console.log(data[0])}</h1>
                <h3><span>Strain: </span> {data[0].strain}</h3>
                <h3>{data[0].type}</h3>
                <p><span>description: </span> {data[0].description}</p>
                <p>{data[0].flavor}</p>
                <p><span>effects: </span> {data[0].effect}</p>
                <p><span>rating: </span> {data[0].rating}</p>
                <button 
                    onClick={() => {
                        props.deleteRecommend(props.recommendId)}
                    }>
                    Delete Recommendation ?
                </button>            
            </div> :
            <p style={{color: 'red'}}>Recommendation Deleted ! </p>}
        </Recommendations>
    )
}

const mapStateToProps = state => {
    return {
        ...state,
        recommendRetrieve: state.recommendRetrieve,
        recommendSuccess: state.recommendSuccess,
        recommendId: state.recommendId
    }
}

export default connect(mapStateToProps, { deleteRecommend })(RecommendDisplay)