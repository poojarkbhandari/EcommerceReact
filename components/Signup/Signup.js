import React, { Component } from 'react';
import axios from 'axios';
import './Signup.css';

class SignUp extends Component {

    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeStreet = this.onChangeStreet.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangePincode = this.onChangePincode.bind(this);
        this.onChangeContact = this.onChangeContact.bind(this);
        this.onClickSignup = this.onClickSignup.bind(this);

        this.state = {
            username: '',
            email:'',
            password: '',
            street: '',
            city: '',
            pincode: '',
            contact:''
        }
    }

    onChangeUsername(e) {
        this.setState({username: e.target.value})
    }

    onChangeEmail(e) {
        this.setState({email: e.target.value})
    }

    onChangePassword(e) {
        this.setState({password: e.target.value})
    }

    onChangeStreet(e) {
        this.setState({street: e.target.value})
    }

    onChangeCity(e) {
        this.setState({city: e.target.value})
    }

    onChangePincode(e) {
        this.setState({pincode: e.target.value})
    }

    onChangeContact(e) {
        this.setState({contact: e.target.value})
    }

    onClickSignup() {
        const user = {
            name: this.state.username,
	        email: this.state.email,
	        password: this.state.password,
            address: {
                street: this.state.street,
                city: this.state.city,
                pincode: this.state.pincode
            },
	        contact: this.state.contact
        }

        axios.post('http://localhost:3000/api/users', user)
            .then(response => 
                {
                    if(response.status == 201){
                        alert("Signed Up Successfully! \nPlease Login");                        
                    }
                })
            .catch(error => {
                alert("Signup Unuccessfully! \nPlease try again.");
            });  
            this.setState({username: ''});
            this.setState({email: ''});
            this.setState({password: ''});
            this.setState({street: ''});
            this.setState({city: ''});
            this.setState({pincode: ''});
            this.setState({contact: ''});
    }

    render() {
        return(
            <div>
                <h1 className = "SignupHeading">Signup</h1>
                <form className = "SignupDetails">
                    <label className = "Labels">User Name</label><br/>
                    <input type = "text" className = "Inputs" value = {this.state.username} onChange = {this.onChangeUsername}/><br/>
                    <label className = "Labels">Email</label><br/>
                    <input type = "text" className = "Inputs" value = {this.state.email} onChange = {this.onChangeEmail}/><br/>
                    <label className = "Labels">Password</label><br/>
                    <input type = "password" className = "Inputs" value = {this.state.password} onChange = {this.onChangePassword}/>
                    <label className = "Labels">Street</label><br/>
                    <input type = "text" className = "Inputs" value = {this.state.street} onChange = {this.onChangeStreet}/><br/>
                    <label className = "Labels">City</label><br/>
                    <input type = "text" className = "Inputs" value = {this.state.city} onChange = {this.onChangeCity}/><br/>
                    <label className = "Labels">Pincode</label><br/>
                    <input type = "text" className = "Inputs" value = {this.state.pincode} onChange = {this.onChangePincode}/><br/>
                    <label className = "Labels">Contact</label><br/>
                    <input type = "text" className = "Inputs" value = {this.state.contact} onChange = {this.onChangeContact}/><br/>
                    
                    <button className = "SignupButton" onClick = {this.onClickSignup}>Signup</button>
                </form>
            </div>
            
        );
    }
}

export default SignUp;