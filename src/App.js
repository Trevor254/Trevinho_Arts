import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

import Toolbar from './components/Toolbar/Toolbar';
import Sidebar from './components/Sidebar/Sidebar';
import Backdrop from './components/Backdrop/Backdrop';
//import Footer from './components/Footer/Footer';
import Home from './components/Home';
import About from './components/About';
//import Footer from './components/Footer/Footer';
// import Gallery from './components/Gallery';
// import Cart from './components/Cart';
 import Contact from './components/Contact';

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
            <Route path="/contact" component={Contact}/>
          </Switch>
        </div>
        
      </BrowserRouter>
      
    )
  }
}

export default App;
