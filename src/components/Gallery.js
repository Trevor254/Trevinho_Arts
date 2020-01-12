import React from 'react';
import {ProductConsumer} from '../Context';
import Gallery2 from './Gallery2';

class Gallery extends React.Component{
   
    render(){
        return (
            <div className="divcontainer">
                <div className="D-row">
                    <ProductConsumer>
                        {(value)=>{
                           return value.products.map( product => {
                               return <Gallery2 key={product.id} product={product}/>
                           })
                        }}
                    </ProductConsumer>
                </div>
            </div>

        )
    }
}

export default Gallery;