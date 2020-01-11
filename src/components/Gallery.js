import React from 'react';
//import Gallery2 from '../components/Gallery2';
import Data from '../Data'


class Gallery extends React.Component{
    constructor(){
        super()
        this.state = {
            products:Data
        }
    }
    render(){
        console.log(this.state.products)
        return (
            <div className="divcontainer">
                
                <div className="D-row">
                   
                </div>
            </div>

        )
    }
}

export default Gallery;