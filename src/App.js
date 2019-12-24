import React from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import Sidebar from './components/Sidebar/Sidebar';
import Backdrop from './components/Backdrop/Backdrop';



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
       <div style={{height:'100%'}}>
          <Toolbar toggleClickHandler = {this.ToggleClick}/>
          <Sidebar show={this.state.SidebarOpen}/>
          {backdrop}
  
       </div>
    )
  }
}

export default App;
