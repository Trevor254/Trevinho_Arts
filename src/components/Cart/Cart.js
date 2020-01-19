import React from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../Context'

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
                                  <Title name="your" title="cart"/>
                                  <CartColumns/>
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
