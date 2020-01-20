import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import {ProductProvider} from './Context';
import Toolbar from './components/Toolbar/Toolbar';
import Sidebar from './components/Sidebar/Sidebar';
import Backdrop from './components/Backdrop/Backdrop';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery';
import Details from './components/Details';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Modal from './components/Modal';


class App extends React.Component{
  state = {
    SidebarOpen: false
  }

  ToggleClick = () => {
     this.setState((prevState) => {
       return {
         SidebarOpen: !prevState.SidebarOpen
       }
     })
  }

  //Close the side bar
  BackdropClickHandler = () => {
    this.setState({
      SidebarOpen:false
    })
  }

  render(){
    let backdrop;

    if(this.state.SidebarOpen) {
      backdrop = <Backdrop click={this.BackdropClickHandler}/>
    }
    return(
      <ProductProvider>
      <BrowserRouter>
       <div style={{height:'100%'}}>
          <Toolbar toggleClickHandler = {this.ToggleClick}/>
          <Sidebar show={this.state.SidebarOpen}/>
          {backdrop}
         
        </div>
        <div>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/about" component={About}/>
            <Route path="/gallery" component={Gallery}/>
            <Route path="/details" component={Details}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/cart" component={Cart}/>
          </Switch>
          <Modal />
          <Footer />
        </div>
      </BrowserRouter>
      </ProductProvider>
      
    )
  }
}

export default App;
