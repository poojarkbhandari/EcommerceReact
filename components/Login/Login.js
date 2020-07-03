import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Login.css';

class Login extends Component {

    constructor(props) {
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onClickLogin = this.onClickLogin.bind(this);

        this.state = {
            email: '',
            password: '',
            isLoggedIn: false
        }
    }

    onChangeEmail(e) {
        this.setState({email: e.target.value})
    }

    onChangePassword(e) {
        this.setState({password: e.target.value})
    }

    onClickLogin() {
        const user = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:3000/api/users/login', user)
            .then(response => 
                {
                    if(response.status != 400){
                        this.setState({isLoggedIn: true});
                        alert("Logged In Successfully!");                        
                    }
                })
            .catch(error => {
                alert("Logged In Unuccessfully!");
            });  
            this.setState({email: ''});
            this.setState({password: ''});      
    }
    render() {
        return(
            <div>
                <h1 className = "LoginHeading">Login</h1>
                <form className = "LoginDetails">
                    <label className = "Labels">Email</label><br/>
                    <input type = "text" className = "Inputs" value = {this.state.email} onChange = {this.onChangeEmail}/><br/>
                    <label className = "Labels">Password</label><br/>
                    <input type = "password" className = "Inputs" value = {this.state.password} onChange = {this.onChangePassword}/>
                    <button className = "LoginButton" onClick = {this.onClickLogin}>Login</button>
                    <Link to = "/signup">
                        <button className = "CreatenewButton">Create new account?</button>
                    </Link>                    
                </form>
            </div>
            
        );
    }
}

export default Login;