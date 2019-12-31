import React from 'react';

import logo from '../images/6e0f361a-81df-443a-a042-f35ecaeeb9df_200x200.png'
class Contact extends React.Component{
    render(){
        return (
            <div>
                <div>
                   <img className="title-logo" src={logo} alt=""/>
                </div>
                <br/>
                <h2 align="center" className="contact-title">Contact Details</h2>
                <br/>
                <br/>
                <p align="center" className="text">
                    Hey there! Hopefully my art pieces have sparked your interest. If you wish to have one or request a unique sketch of your own, feel free to contact me with the provided details below;
                </p>
                <br/>
                
            </div>
        )
    }
}

export default Contact;