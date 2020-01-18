import React, {Component} from 'react';
import {storeData,detailProduct} from './Data';

const ProductContext = React.createContext()
//provider
//consumer
class ProductProvider extends Component{
    state = {
        products:[],
        detailProduct:detailProduct,
        cart:[],
        modalOpen:false,
        modalProduct:detailProduct,
        cartSubTotal:0,
        cartTax:0,
        cartTotal:0
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

    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }
    
    //function to display details upon click on image
    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(()=>{
            return { detailProduct:product}
        })
    }
    
    //function to add item to cart
    addToCart = (id) => {
        //gives access to all products stored in the state
      let tempProducts = [...this.state.products];
      const index = tempProducts.indexOf(this.getItem(id));
      const product = tempProducts[index];
      product.inCart = true;
      product.count = 1;
      const price = product.price;
      product.total = price;

      this.setState(()=>{
          return { products:tempProducts,cart:[...this.state.cart,
        product]};
      },()=> {
          console.log(this.state)
      })
    }
    
    //this method will display a modal window when one clicks on an image
    openModal = id => {
        const product = this.getItem(id);
        this.setState(()=> {
            return {
                modalProduct:product,
                modalOpen:true
            }
        })
    }
    //this method will close the modal window
    closeModal = () => {
       this.setState(() =>{
           return{
               modalOpen:false
           }
       })
    }
    //this method will increment quantity
    increment = id => {
        console.log('this is increment method')
    }
    //this method will decrement quantity amount
    decrement = id => {
        console.log('this is decrement method')
    }
    //this method will remove item from cart
    removeItem = id => {
        console.log('remove item')
    }
    //this method will clear item from the cart
    clearCart = () =>{
      console.log('cart cleared')
    }

    render(){
        return(
           <ProductContext.Provider value={{
              ...this.state,
              handleDetail:this.handleDetail,
              addToCart:this.addToCart,
              openModal:this.openModal,
              closeModal:this.closeModal,
              increment:this.increment,
              decrement:this.decrement,
              removeItem:this.removeItem,
              clearCart:this.clearCart
           }}>
               {this.props.children}
           </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer}