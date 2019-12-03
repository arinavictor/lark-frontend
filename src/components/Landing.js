import React, { Component } from 'react'
import { connect } from 'react-redux'
import {validateUser} from '../actions/user'
import NavBar from './NavBar'

class Landing extends Component {

    componentDidMount = () => {
       this.props.validate()
    }

    render() {
        const {history} = this.props
        if (!localStorage.token) {
            history.push('/login')
        }
        
        return  (
            <div>
                <NavBar />
            </div>
        )
}
    
   
}

const mapStateToProps = ({user}) => ({
    user
})

const mapDispatchToProps = (dispatch) => ({
    validate: () => validateUser(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Landing)