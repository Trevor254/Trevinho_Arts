import React from 'react';
//import Gallery2 from '../components/Gallery2';
import Data from '../Data'
import {ProductConsumer} from '../Context';

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
                    <ProductConsumer>
                        {(hello)=>{
                           return <h1>{hello}</h1>
                        }}
                    </ProductConsumer>
                </div>
            </div>

        )
    }
}

export default Gallery;