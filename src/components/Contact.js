import React, { Component } from 'react'
import emailjs from 'emailjs-com'

export default class Contact extends Component{
    state = {
        name: '',
        email: '',
        subject: '',
        message: ''
    }
    
    handleSubmit = (event) => {
        event.preventDefault()

        const { name, email, subject, message } = this.state 

        let templateParams = {
            from_name: email,
            to_name: process.env.REACT_APP_EMAIL,
            subject: subject,
            message_html: message,
        }

        emailjs.send('contact_service', 'contact_form', templateParams, process.env.REACT_APP_USER_ID)

        this.resetForm()
    }

    resetForm = () => {
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: ''
        })
    }

    handleChange = (event) => {
        console.log("im changing")
        const {name, value} = event.target
        this.setState({
            [name]: value 
        })
    }
    
    render() {
    console.log(this.state)    
        return (
            <form className='contact-form' onSubmit={this.handleSubmit}>
                <input type='text' name='name' value={this.state.name} onChange={this.handleChange} placeholder='Name'/>
                <input type='text' name='email' value={this.state.email} onChange={this.handleChange} placeholder='Email' />
                <input type='text' name='subject' value={this.state.subject} onChange={this.handleChange} placeholder='Subject' />
                <textarea placeholder='Message' name='message' value={this.state.message} onChange={this.handleChange}></textarea>
                <input type='submit' value='Send'/>
            </form>
        )
  }
}


