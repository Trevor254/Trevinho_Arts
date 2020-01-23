import React from 'react';
import logo from '../image2/eb055966-6724-43f8-bbcc-d50648a8de36_200x200(1).png';
class Contact extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            firstName:'',
            lastName:'',
            email:'',
            textArea:''
        }
    }

    onfirstNameChange(event) {
        this.setState({firstName: event.target.value})
      }
    
    onlastNameChange(event){
        this.setState({lastName:event.target.value})
    }
    
    onEmailChange(event) {
        this.setState({email: event.target.value})
    }
    
    ontextAreaChange(event) {
        this.setState({textArea: event.target.value})
    }
    
    handleSubmit( e ) {
        e.preventDefault();
        console.log(this.state);
      }


    render(){
        return (
            <div>
                <div>
                   <img className="title-logo" src={logo} alt=""/>
                </div>
                
                <h2 align="center" className="contact-title">Contact Details</h2>
                <p align="center" className="text">
                    Hey there! Hopefully my art pieces have sparked your interest. 
                    If you wish to have one or request a unique sketch of your own, 
                    feel free to contact me with the provided details below;
                </p>


                <div>
                    <ul className="list-container">
                        <li> <i className="fab fa-instagram"></i> @trevinho_arts</li>
                        <li> <i className="fab fa-whatsapp"></i> +254 773 379 517</li>
                        <li> <i className="fab fa-twitter"></i> @Trevor2542</li>
                    </ul>
                </div>

                <br/>
               
                 <div className="container">
                  <form>
                      <div className="row">
                          <div className="col-25">
                              <label  className="label">First Name</label>
                          </div>
                          <div className="col-75">
                              <input 
                                 className="input"
                                 name='firstName'
                                 type='text'
                                 placeholder='Your name..' 
                                 value={this.state.firstName} 
                                 onChange={this.onfirstNameChange.bind(this)}
                              />
                          </div>
                      </div>

                      <div className="row">
                          <div className="col-25">
                              <label  className="label">Last Name</label>
                          </div>
                          <div className="col-75">
                               <input 
                                 className="input"
                                 name='lastName'
                                 type='text'
                                 placeholder='Your last name..' 
                                 value={this.state.lastName} 
                                 onChange={this.onlastNameChange.bind(this)}
                               />
                          </div>
                      </div>

                      <div className="row">
                         <div className="col-25">
                            <label  className="label">Email</label>
                         </div>
                         <div className="col-75">
                               <input 
                                 className="input"
                                 name='email'
                                 type='text'
                                 placeholder='Your email address..' 
                                 value={this.state.email} 
                                 onChange={this.onEmailChange.bind(this)}
                               />
                         </div>
                       </div>
                     
                     <div className="row">
                         <div className="col-25">
                             <label  className="label">Your request</label>
                         </div>
                         <div className="col-75">
                             <textarea
                                className="textarea"
                                name='textArea'
                                placeholder='Type here...'
                                value={this.state.textArea}
                                onChange={this.ontextAreaChange.bind(this)}
                              />
                         </div>
                     </div>

                     <br/>
                     <div className="row">
                          <input 
                          type="submit" 
                          value="Submit"
                          onClick={e => this.handleSubmit(e)}
                          />
                     </div>
                  </form>
                </div> 
            </div>
        )
    }
}

export default Contact;

 