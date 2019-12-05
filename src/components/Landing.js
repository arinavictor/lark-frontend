import React, { Component } from 'react'
import { connect } from 'react-redux'
import {validateUser} from '../actions/user'
import '../styles/Registration.css'

class Landing extends Component {

    componentDidMount = () => {
       if (localStorage.token) {this.props.validate()}
    }
   

    render() {
        const {history} = this.props
        if (!localStorage.token) {
            history.push('/login')
        }
        
        return  (
            <div className='home-message'>
                <h1>Welcome to Lark Games!</h1>
                <p>Web games for kids that don't keep score.</p>
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