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

  render(){
    let sideDrawer;
    let backdrop;

    if(this.state.SidebarOpen) {
      sideDrawer = <Sidebar/>;
      backdrop = <Backdrop/>
    }
    return(
       <div style={{height:'100%'}}>
          <Toolbar toggleClickHandler = {this.ToggleClick}/>

          {sideDrawer}
          {backdrop}
  
       </div>
    )
  }
}

export default App;
