import React, {Component} from "react";
import {MDBBtn, MDBCol, MDBContainer, MDBInput, MDBRow} from 'mdbreact';
import ApiService from "../api";

const apiService = new ApiService();

export default class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Boris",
            email: "mail@mail.ru",
            password: "asjdnjasnd12j3jk12n3j21KSAD!!"
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    onSubmit = (e) => {
        e.preventDefault();
        apiService.register(this.state)
            .then(res => {
                console.log(res)
                //    TODO: redirect
            })
            .catch(err => {
                console.error("Something went wrong", err);
            });
    };

    render() {
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="6">
                        <form
                            onSubmit={this.onSubmit}
                        >
                            <p className="h5 text-center mb-4">Sign up</p>
                            <div className="grey-text">
                                <MDBInput
                                    value={this.state.name}
                                    label="Your name"
                                    icon="user"
                                    group
                                    type="text"
                                    validate
                                    name="name"
                                    error="wrong"
                                    success="right"
                                    onChange={this.handleInputChange}
                                />
                                <MDBInput
                                    value={this.state.email}
                                    label="Your email"
                                    icon="envelope"
                                    group
                                    type="email"
                                    validate
                                    name="email"
                                    error="wrong"
                                    success="right"
                                    onChange={this.handleInputChange}
                                />
                                <MDBInput
                                    value={this.state.password}
                                    label="Your password"
                                    icon="lock"
                                    group
                                    name="password"
                                    type="password"
                                    validate
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <div className="text-center">
                                <MDBBtn color="primary" onClick={this.onSubmit}>Register</MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}
