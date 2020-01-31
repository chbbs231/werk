import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Parallaxx from '../../components/Parallaxx'
import LandingContext from '../../utils/LandingContext'

const Landing = () => {
    const [ landingState, setLandingState ] = useState({
        name: '',
        username: '',
        password: '',
        age: 0,
        weight: 0
    })

    landingState.handleInputChange = event => {
        setLandingState({ ...landingState, [event.target.name]: event.target.value })
    }

    return (
        <LandingContext.Provider value={landingState}>
            <Parallaxx />
        </LandingContext.Provider>
    )
}

export default Landing