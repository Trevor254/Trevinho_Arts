import React from 'react';
//import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../Context';
import CartList from './CartList';
import CartTotals from './CartTotals';

class Cart extends React.Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        if(cart.length > 0){
                            return(
                               <div>
                                  <h2 className="col-10 mx-auto my-2 text-center text-light">Your Cart</h2>
                                  <CartColumns/>
                                  <CartList value={value}/>
                                  <CartTotals value={value} history={this.props.history}/>
                               </div>
                            )
                        } else {
                          return <EmptyCart />
                        }
                    }}
                </ProductConsumer>
            
            </section>
        )
    }
}

export default Cart;
