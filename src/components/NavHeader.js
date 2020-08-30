import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOut } from '../actions/actions'
import styled from 'styled-components'

const Header = styled.div`
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px 10px 40px;
    background: rgba(0, 100, 0, .2);
    color: white;
    span {
        width: 50px;
        height: 50px;
        img {
            max-width: 100%;
        }
    }
    div {
        width: 50%;
        display: flex;
        justify-content: space-between;
        a {
            color: #007e00;
            &:hover {
                color: #04f204;
            }
        }
    }
`;

const NavHeader = (props) => {
    const [linkText, setLinkText] = useState('')

    useEffect(() => {
        if(props.token){
            return setLinkText("Find Recommendations")
        }
        return setLinkText('')
    }, [props.token])

    return (
        <Header>
            <span><img src='https://smallimg.pngkey.com/png/small/60-600941_cannabis-registration-green-medical-cross-logo.png' alt='medicinal marijuana cross' /></span>
            <div>
                <a href='https://medcabinet4.netlify.app/'>Marketing Page</a>
                {/* <NavLink to='/API-test'>API Test</NavLink> */}
                <NavLink to='/'>Login / SignUp</NavLink>
                <NavLink to='/logout'>Log Out</NavLink>
                <NavLink to='/user-form'>{linkText}</NavLink>
            </div>
        </Header>
    )
}

const mapStateToProps = state => {
    return {
        ...state,
        token: state.token
    }
}

export default connect(mapStateToProps, { logOut })(NavHeader)