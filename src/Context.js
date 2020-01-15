import React, {Component} from 'react';
import {storeData,detailImage} from './Data';

const ProductContext = React.createContext()
//provider
//consumer
class ProductProvider extends Component{
    state = {
        products:[],
        detailImage:detailImage
    };

    componentDidMount(){
        this.setProducts();
    }
    
    setProducts = () => {
        // set tempProducts to empty array
        let tempProducts = [];
        //use forEach to loopthrough items in store data
        storeData.forEach(item => {
            //declare variable singleItem and assign it to item that lists out the item using spread operator
            const singleItem = {...item};
            tempProducts = [...tempProducts,singleItem];
        })

        this.setState(()=> {
            return {products : tempProducts}
        });
    }
    
    //function to display details upon click on image
    handleDetail = () => {
        console.log('hello from detail')
    }
    
    //function to add item to cart
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