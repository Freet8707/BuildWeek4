import { connect } from 'react-redux'
import axios from 'axios'

const axiosWithAuth = (props) => {
    return axios.create({
        headers: {
            authorization: props.token
        }
    })
}

const mapStateToProps = state => {
    return {
        ...state,
        token: state.token
    }
}

export default connect(mapStateToProps, null)(axiosWithAuth)