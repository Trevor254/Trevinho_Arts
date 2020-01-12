import React, {Component} from 'react';
import {Data,detailImage} from './Data';

const ProductContext = React.createContext()
//provider
//consumer
class ProductProvider extends Component{
    state = {
        products:Data,
        detailImage:detailImage
    }

    handleDetail = () => {
        console.log('hello from detail')
    }

    addToCart = () => {
        console.log('hello from add to cart')
    }

    render(){
        return(
           <ProductContext.Provider value={{
              ...this.state,
              handleDetail:this.handleDetail,
              addToCart:this.addToCart
           }}>
               {this.props.children}
           </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer}