import React, { useState, useEffect } from 'react'
import axios from 'axios'

const testData = {
    "effect": "Creative",
    "flavor": "Blueberry"
}

const APITest = () => {
    const [data, setData] = useState({})

    useEffect(() => {
        axios.post('https://med-cab4.herokuapp.com/predict', testData)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err.message)
        })
    }, [])
    
    return(
        <>
            <p>inside of APITest</p>
        </>
    )
}

export default APITest